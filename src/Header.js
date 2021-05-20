import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  name: PropTypes.string,
}

export default function Header({ name }) {
  return <HeaderWrapper>{name}</HeaderWrapper>
}

const HeaderWrapper = styled.h1`
  box-sizing: border-box;
  font-size: 80%;
  text-align: center;
  padding: 0 0 0 10px;
  font-family: sans-serif;
`
