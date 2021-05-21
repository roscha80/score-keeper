import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

HistoryEntry.propTypes = {
  gameName: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
}

export default function HistoryEntry({ gameName, players, date }) {
  return (
    <SingleEntry>
      <Name>{gameName}</Name>
      <Date>{date}</Date>
      <ul>
        {players.map(({ player, score }) => (
          <Player key={player}>
            <span>{player}</span>
            <span>{score}</span>
          </Player>
        ))}
      </ul>
    </SingleEntry>
  )
}

const SingleEntry = styled.section`
  display: grid;
  gap: 15px;
  font-family: sans-serif;
  margin: 20px 0;
  justify-content: center;
`
const Name = styled.h2`
  padding: 12px;
  justify-content: center;
`
const Player = styled.li`
  display: flex;
  justify-content: space-between;
`
const Date = styled.small`
  text-align: center;
  font-size: 50%;
`
