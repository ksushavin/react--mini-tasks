
import { Component } from 'react'
import { Box } from 'components/Box';
import queryString from 'query-string';
import { InnerContainer, GalleryTitle, Button } from './LanguageFilter.styled';
import { getFilteredItems } from 'api/filter';

export class LanguageFilter extends Component {
  state = {
    filters: {
      language: '',
      salary: '',
    },
    isOpen: true,
    hasError: false,
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState((prevState)=>({filters: {...prevState.filters, [name]: value }}))
  }

  toggleHint = () => {
    this.setState(({isOpen})=>({isOpen: !isOpen}))
  }

  componentDidMount() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
  
    params.forEach((value, key) => {
      this.setState((prevState) => (
        {
          filters: {
            ...prevState.filters,
            [key]: value,
          }
        }
      ))
    })  
  }

  componentDidUpdate(prevProps, prevState) {
    const {filters} = this.state;
    const queryParams = queryString.stringify(filters, {
        skipEmptyString: true
      });
    window.history.pushState('','', `?${queryParams}`);
    // window.location.search = queryParams;

    if (prevState.filters !== this.state.filters) {
      //іммітуємо запит
      getFilteredItems(queryParams).then(console.log)
    }
  }

  componentDidCatch() {
    console.log('there was an error');
    this.setState({ hasError: true })
  }

  render() {
    const { isOpen, hasError, filters } = this.state;
    const { salary, language } = filters;
    return (
      <InnerContainer>
        <GalleryTitle>
          Events
        </GalleryTitle>

        <Button type='button' onClick={this.toggleHint} >toggle Gallery </ Button>
        
        {isOpen && !hasError && <Hint/>}

        <Box display='flex' gridGap='8px' pt='12px'>
          <Box>
            <select
              name="language"
              id="language"
              value={language}
              onChange={this.handleChange}>
              <option
                value=""
                defaultValue=''
                disabled>
                Select language
              </option>
              <option>Java</option>
              <option>JavaScript</option>
              <option>React</option>
            </select>
          </Box>
          <Box>
            <select
              name="salary"
              id="salary"
              value={salary}
              onChange={this.handleChange}>
              <option
                value=""
                disabled
              >
                Select salary
              </option>
              <option>10000</option>
              <option>12000</option>
              <option>15000</option>
            </select>
          </Box>
        </Box>
        
      </InnerContainer>
    )  
  }
}




let intervalId = null;

class Hint extends Component {
  state={
  counter: null,
  }

  handleMouseMove = () => {
    console.log('mouse moving, click toggle!')
  }

  componentDidMount() {
    intervalId = setInterval(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }, 1000);

    window.addEventListener('mousemove',this.handleMouseMove )
  }

  componentWillUnmount() {
    console.log('Hint unmounted');

    clearInterval(intervalId);
    window.removeEventListener('mousemove',this.handleMouseMove )
  }

  render() {
    const { counter } = this.state;
    
    return (
      <Box mt='20px'>
        Filter it {counter}
      </Box>
    )
  }
}







