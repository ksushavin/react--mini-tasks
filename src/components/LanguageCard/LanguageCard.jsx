

import { Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Component } from 'react'
import { Box } from 'components/Box';
import { InnerContainer, FormTitle, Label, Input, Button } from './LanguageCard.styled';

const INITIAL_VALUE = {
  firstName: '',
  lastName: '',
  language: '',
  conformation: false,
}

const Schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  language: Yup.string().required('Required'),
  conformation: Yup.boolean().required('Required'),
 });

export class LanguageCard extends Component {

  state = {
    ...INITIAL_VALUE
  };

  handelChange = (e) => {
    const { name, value, checked, type } = e.target;
    const result = type === 'checkbox' ? checked : value;
    this.setState({ [name]: result })
  }

  render() {
    return (
      <InnerContainer>
        <Formik
          initialValues={{ ...INITIAL_VALUE }}
          validationSchema={Schema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              
            }, 1000);
            console.log(values);
            actions.resetForm();
          }}
        >
          {props => (
            
            <form id='form' onSubmit={props.handleSubmit}>
              <FormTitle>
                Selected Tag is <span>{props.values.language}</span>
              </FormTitle>
              <Box mb="18px">
                <Label htmlFor="firstName">
                  First name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.firstName} 
                  />
                  <Box color="red"><ErrorMessage name="firstName" /></Box>
                {/* {props.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
                ) : null} */}
              </Box>
              <Box>
                <Label htmlFor="lastName">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.lastName}
                />
                <Box color="tomato">
                  <ErrorMessage name="lastName" />
                </Box>
              </Box>
              <Box mt='8px' mb='20px' display='flex' gridGap='4px'>
                <input
                  name="conformation"
                  type="checkbox"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.conformation}
                  checked={props.values.conformation}
                />
                Conformation
              </Box>

              <Box mb='20px'>
                <Box p='4px'display='flex' gridGap='4px' >
                  <input 
                  type="radio" 
                  name='language' 
                  value='React'
                  checked={props.values.language==='React'}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur} />React</Box>
                <Box p='4px'display='flex' gridGap='4px' >
                  <input 
                  type="radio"    
                  name='language' 
                  value='JS'
                  checked={props.values.language==='JS'}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur} />Js</Box>
                <Box p='4px' display='flex' gridGap='4px'>
                  <input 
                  type="radio" 
                  name='language' 
                  value='Node.js'
                  checked={props.values.language==='Node.js'}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur} />Node.js</Box>
                </Box>
              <Button type='submit'>Submit</ Button>
            </form>
          )}
        </Formik>
      </InnerContainer>
    )  
  }
}





