import React from 'react'
import PropTypes from 'prop-types'
import { Title } from './Header.styled'

export const Header = ({children}) => {
  return (
    <Title>{children}</Title>
  )
}

Header.propTypes = {
    children: PropTypes.string,
}


