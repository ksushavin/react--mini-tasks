
// import PropTypes from 'prop-types'
import { Component } from 'react'
import { Box } from 'components/Box';
import { InnerContainer, FormTitle, Label, Input, Button } from './LanguageCard.styled';

export class LanguageCard extends Component {

  state = {
    language: '',
  };

  render() {
    return (
      <InnerContainer>
        <FormTitle>
          Selected Tag is <span></span>
        </FormTitle>
        <form id='form'>
          <Label htmlFor="feature">
            Feature name
          </Label>
          <Input
            id="feature"
            name="feature"
            type="text" />
        </form>
        <Box mb='30px'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, est eveniet. Quod vitae iusto modi velit, reiciendis tempora reprehenderit hic. Perferendis illum sunt quibusdam, unde molestiae aliquid. Commodi, totam in.</Box>
        <Box display='flex' gridGap='12px'>
          <Button>Css</Button>
          <Button>React</Button>
          <Button>Node.js</Button>
        </Box>
      </InnerContainer>
    )
  }
}

// LanguageCard.propTypes = {

// }



