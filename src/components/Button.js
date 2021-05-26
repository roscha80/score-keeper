import styled from 'styled-components'
import PropTypes from 'prop-types'

Button.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  component: PropTypes.any,
  disabled: PropTypes.bool,
}
export default function Button({ component: Component = 'button', ...props }) {
  return <ButtonStyled as={Component} {...props} />
}

const ButtonStyled = styled.button`
  margin: 10px;
  padding: 5px 12px;
  border: none;
  border-radius: 5px;
  background: ${props => (props.isActive ? 'IndianRed' : 'LightCoral')};
  color: ${props => props.color};
  text-decoration: none;
  text-align: center;

  &:hover {
    background: pink;
  }
  &[disabled] {
    opacity: 0.6;
    pointer-events: none;
  }
`
