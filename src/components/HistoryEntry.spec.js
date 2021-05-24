import { render, screen } from '@testing-library/react'
import HistoryEntry from './HistoryEntry'

describe('HistoryEntry', () => {
  it('renders a gameName and players', async () => {
    render(
      <HistoryEntry
        gameName="Game1"
        players={[
          { name: 'Player1', score: 10 },
          { name: 'Player2', score: 30 },
        ]}
      />
    )

    expect(screen.getByRole('heading')).toHaveTextContent('Game1')

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)
    expect(listItems[0]).toHaveTextContent('Player1')
    expect(listItems[0]).toHaveTextContent('10')
    expect(listItems[1]).toHaveTextContent('Player2')
    expect(listItems[1]).toHaveTextContent('30')
  })
})
