import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Headers.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.h3`
  text-align: center;
  font-family: sans-serif;
  scale: 70%;
`
