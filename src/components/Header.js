import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Headers.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>
}

const HeaderStyled = styled.h2`
  box-sizing: border-box;
  text-align: center;
  padding: 0 0 0 10px;
  font-family: sans-serif;
  font-weight: 700;
`
