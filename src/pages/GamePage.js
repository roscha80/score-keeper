import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import Player from '../components/Player'

GamePage.propTypes = {
  gameName: PropTypes.string,
  players: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
  onResetScores: PropTypes.func.isRequired,
  onEndGame: PropTypes.func.isRequired,
  onPlayerUpdate: PropTypes.func.isRequired,
}

export default function GamePage({
  gameName,
  players,
  onResetScores,
  onEndGame,
  onPlayerUpdate,
}) {
  return (
    <Grid>
      <GameHeader>{gameName}</GameHeader>
      {players.map(({ name, score }, index) => (
        <Player
          onMinus={() => onPlayerUpdate(index, -10)}
          onPlus={() => onPlayerUpdate(index, 10)}
          key={name}
          name={name}
          score={score}
        />
      ))}
      <Button onClick={onResetScores}>Reset scores</Button>
      <Button onClick={onEndGame}>End this game</Button>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 20px;
  background: Wheat !important;
  border-radius: 15px;
`

const GameHeader = styled.h2`
  background: RosyBrown;
  border-radius: 5px;
  margin: 10px;
  padding: 10px 12px;
  border: none;
  text-align: center;
  color: white;
`
