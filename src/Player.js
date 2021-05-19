import PropTypes from 'prop-types'
import Button from './Button'
import styled from 'styled-components/macro'

Player.propTypes = {
  name: PropTypes.string,
  onMinus: PropTypes.func,
  onPlus: PropTypes.func,
  score: PropTypes.number,
}

export default function Player({ name, onMinus, onPlus, score }) {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <Button onClick={onMinus}>-</Button>
      <h3>{score}</h3>
      <Button onClick={onPlus}>+</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-family: sans-serif;
  margin: 20px 0;
  justify-content: center;

  h2 {
    padding: 12px;
    justify-content: center;
  }

  h3 {
    padding: 12px;
    width: 4ch;
  }
`
