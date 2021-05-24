import styled from 'styled-components'
import HistoryEntry from '../components/HistoryEntry'

export default function HistoryPage({ games }) {
  return (
    <Grid>
      {games.map(({ id, gameName, players, date }) => (
        <HistoryEntry
          key={id}
          gameName={gameName}
          players={players}
          date={date}
        />
      ))}
    </Grid>
  )
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  background: Wheat !important;
  border-radius: 15px;
`
