import styled from 'styled-components'

const Button = styled.button`
  margin: 10px;
  padding: 0 12px;
  border: none;
  border-radius: 5px;
  background: ${props => (props.isActive ? 'skyblue' : 'slategray')};
  color: ${props => props.color};

  &:hover {
    background: pink;
  }

  &:isactive {
    scale: 120%;
  }
`
export default Button
