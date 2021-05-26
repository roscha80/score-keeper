import styled from 'styled-components'
import HistoryEntry from '../components/HistoryEntry'

export default function HistoryPage({ games }) {
  return (
    <Grid>
      {games.map(({ index, gameName, players, date }) => (
        <li key={index}>
          <HistoryEntry gameName={gameName} players={players} date={date} />
        </li>
      ))}
    </Grid>
  )
}

const Grid = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  background: Wheat !important;
  border-radius: 15px;
  padding: 0;
  list-style-type: none;
`
