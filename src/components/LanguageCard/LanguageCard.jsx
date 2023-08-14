
// import PropTypes from 'prop-types'
import { Component } from 'react'
import { Box } from 'components/Box';
import { InnerContainer, FormTitle, Label, Input, Button } from './LanguageCard.styled';

export class LanguageCard extends Component {

  state = {
    firstName: '',
    lastName: '',
    language: '',
    conformation: false,
  };

  handelChange = (e) => {
    const { name, value, checked, type } = e.target;
    const result = type === 'checkbox' ? checked : value;
    this.setState({ [name]: result })
  }

  handelSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    const { firstName, language, lastName, conformation } = this.state;

    return (
      <InnerContainer>
        <FormTitle>
          Selected Tag is <span>{language }</span>
        </FormTitle>
        <form id='form' onSubmit={this.handelSubmit}>
          <Label htmlFor="firstName">
            First name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            onChange={this.handelChange}
            value={firstName} />
          
          <Label htmlFor="lastName">
            Last name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            onChange={this.handelChange}
            value={lastName} />

          

          <Box mb='20px'>
            <input
            name="conformation"
            type="checkbox"
            onChange={this.handelChange}
            value={conformation} />
            Conformation
          </Box>
          <Box mb='20px'>
            <Box p='4px' ><input type="radio" name='language' value='React' onChange={this.handelChange} />React</Box>
            <Box p='4px' ><input type="radio" name='language' value='JS' onChange={this.handelChange} />Js</Box>
            <Box p='4px' ><input type="radio" name='language' value='Node.js' onChange={this.handelChange} />Node.js</Box>
          </Box>
           <Button type='submit'>Submit</ Button>
        </form>
      </InnerContainer>
    )  
  }
}

// LanguageCard.propTypes = {

// }



