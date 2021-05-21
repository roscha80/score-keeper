import styled from 'styled-components'
import HistoryEntry from '../components/HistoryEntry'

export default function HistoryPage({ games, onNavigate }) {
  return (
    <Grid>
      {games.map(({ gameName, players, date }) => (
        <HistoryEntry gameName={gameName} players={players} date={date} />
      ))}
    </Grid>
  )
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`
