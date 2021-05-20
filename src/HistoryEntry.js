import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

HistoryEntry.propTypes = {
  name: PropTypes.string,
  score: PropTypes.number,
}

export default function HistoryEntry({ name, score }) {
  return (
    <SingleEntry>
      <Name>{name}</Name>
      <Score>{score}</Score>
    </SingleEntry>
  )
}

const SingleEntry = styled.section`
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-family: sans-serif;
  margin: 20px 0;
  justify-content: center;
`
const Name = styled.h2`
  padding: 12px;
  justify-content: center;
`
const Score = styled.h3`
  padding: 12px;
  width: 4ch;
`
