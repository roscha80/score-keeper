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
      <StyledUl>
        {players.map(player => (
          <Player key={player.name}>
            <span key={player.name}>
              {player.name + ': '}
              {player.score}
            </span>
          </Player>
        ))}
      </StyledUl>
    </SingleEntry>
  )
}

const SingleEntry = styled.section`
  display: grid;
  gap: 15px;
  font-family: sans-serif;
  justify-content: center;
  background: Wheat !important;
  margin: 0;
  border-radius: 5px;
`
const Name = styled.h2`
  padding: 12px;
  text-align: center;
  background: RosyBrown;
  border-radius: 5px;
  color: white;
`
const StyledUl = styled.ul`
  background: Wheat !important;
`

const Player = styled.li`
  display: flex;
  background: Wheat !important;
  span {
    text-align: center;
    padding: 15px;
    margin: 0;
    background: Wheat !important;
  }
`
const Date = styled.small`
  text-align: center;
  font-weight: 700;
  font-size: 80%;
  padding: 5px;
  border-radius: 5px;
`
