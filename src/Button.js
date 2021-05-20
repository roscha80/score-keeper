import styled from 'styled-components'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
}
export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  margin: 10px;
  padding: 0 12px;
  border: none;
  border-radius: 5px;
  background: ${props => (props.isActive ? 'skyblue' : 'slategray')};
  color: ${props => props.color};

  &:hover {
    background: pink;
  }
`
