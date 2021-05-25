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
    <PlayerWrapper>
      <Name>{name}</Name>
      <Button onClick={onMinus}>-</Button>
      <Score>{score}</Score>
      <Button onClick={onPlus}>+</Button>
    </PlayerWrapper>
  )
}

const PlayerWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-family: sans-serif;
  margin: 20px 0;
  justify-content: center;
  border-radius: 5px;
  background: PapayaWhip !important;
`
const Name = styled.h2`
  padding: 12px;
  justify-content: center;
`
const Score = styled.h3`
  padding: 12px;
  width: 4ch;
`
