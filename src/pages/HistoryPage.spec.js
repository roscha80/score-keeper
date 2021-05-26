import { render, screen } from '@testing-library/react'
import HistoryPage from './HistoryPage'

describe('HistoryPage', () => {
  it('renders the history of games', () => {
    const testGames = [
      {
        gameName: 'Game 1',
        players: [
          { name: 'Rob', score: 20 },
          { name: 'Paul', score: 60 },
        ],
      },
      {
        gameName: 'Game 2',
        players: [
          { name: 'Peter', score: 30 },
          { name: 'Jane', score: 50 },
        ],
      },
    ]
    render(<HistoryPage games={testGames} />)
    const [firstHeading, secondHeading] = screen.getAllByRole('heading')
    expect(firstHeading).toHaveTextContent('Game 1')
    expect(secondHeading).toHaveTextContent('Game 2')

    const [player1, player2, player3, player4] = screen.getAllByTestId(
      'player-score'
    )
    expect(player1).toHaveTextContent('Rob', 20)
    expect(player2).toHaveTextContent('Paul', 60)
    expect(player3).toHaveTextContent('Peter', 30)
    expect(player4).toHaveTextContent('Jane', 50)
  })
})
