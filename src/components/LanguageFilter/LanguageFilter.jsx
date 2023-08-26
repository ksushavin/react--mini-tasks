

// import { Formik, ErrorMessage } from 'formik';
// import * as Yup from "yup";
import { Component } from 'react'
import { Box } from 'components/Box';
import queryString from 'query-string';
import { InnerContainer, GalleryTitle, Button } from './LanguageFilter.styled';
import { getFilteredItems } from 'api/filter';

// const INITIAL_VALUE = {
//   firstName: '',
//   lastName: '',
//   language: '',
//   conformation: false,
// }

// const Schema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   lastName: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   language: Yup.string().required('Required'),
//   conformation: Yup.boolean().required('Required'),
//  });

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

        <Box></Box>
        <Box></Box>
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











// <Formik
//           initialValues={{ ...INITIAL_VALUE }}
//           validationSchema={Schema}
//           onSubmit={(values, actions) => {
//             setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//               actions.setSubmitting(false);
              
//             }, 1000);
//             console.log(values);
//             actions.resetForm();
//           }}
//         >
//           {props => (
            
//             <form id='form' onSubmit={props.handleSubmit}>
              
//               <Box mb="18px">
//                 <Label htmlFor="firstName">
//                   First name
//                 </Label>
//                 <Input
//                   id="firstName"
//                   name="firstName"
//                   type="text"
//                   onChange={props.handleChange}
//                   onBlur={props.handleBlur}
//                   value={props.values.firstName} 
//                   />
//                   <Box color="red"><ErrorMessage name="firstName" /></Box>
//                 {/* {props.errors.firstName ? (
//                 <div>{formik.errors.firstName}</div>
//                 ) : null} */}
//               </Box>
//               <Box>
//                 <Label htmlFor="lastName">
//                   Last name
//                 </Label>
//                 <Input
//                   id="lastName"
//                   name="lastName"
//                   type="text"
//                   onChange={props.handleChange}
//                   onBlur={props.handleBlur}
//                   value={props.values.lastName}
//                 />
//                 <Box color="tomato">
//                   <ErrorMessage name="lastName" />
//                 </Box>
//               </Box>
//               <Box mt='8px' mb='20px' display='flex' gridGap='4px'>
//                 <input
//                   name="conformation"
//                   type="checkbox"
//                   onChange={props.handleChange}
//                   onBlur={props.handleBlur}
//                   value={props.values.conformation}
//                   checked={props.values.conformation}
//                 />
//                 Conformation
//               </Box>

//               <Box mb='20px'>
//                 <Box p='4px'display='flex' gridGap='4px' >
//                   <input 
//                   type="radio" 
//                   name='language' 
//                   value='React'
//                   checked={props.values.language==='React'}
//                   onChange={props.handleChange}
//                   onBlur={props.handleBlur} />React</Box>
//                 <Box p='4px'display='flex' gridGap='4px' >
//                   <input 
//                   type="radio"    
//                   name='language' 
//                   value='JS'
//                   checked={props.values.language==='JS'}
//                   onChange={props.handleChange}
//                   onBlur={props.handleBlur} />Js</Box>
//                 <Box p='4px' display='flex' gridGap='4px'>
//                   <input 
//                   type="radio" 
//                   name='language' 
//                   value='Node.js'
//                   checked={props.values.language==='Node.js'}
//                   onChange={props.handleChange}
//                   onBlur={props.handleBlur} />Node.js</Box>
//                 </Box>
//               <Button type='submit'>Submit</ Button>
//             </form>
//           )}
//         </Formik>



