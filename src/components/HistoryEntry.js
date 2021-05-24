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
        {players.map(player => (
          <Player key={player.name}>
            <span>
              {player.name + ': '}
              {player.score}
            </span>
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
  justify-content: center;
`
const Name = styled.h2`
  padding: 12px;
  justify-content: center;
  background: PaleVioletRed;
  border-radius: 5px;
  color: white;
`
const Player = styled.li`
  display: flex;
  justify-content: space-between;
  span {
    background: LightPink;
    padding: 5px;
    border-radius: 5px;
  }
`
const Date = styled.small`
  text-align: center;
  font-weight: 700;
  font-size: 80%;
`
