import { render, screen } from 'react-dom'
import Header from './Header'

describe('Header', () => {
  fit('contains a text', async () => {
    render(<Header name={'Headline'}>Headline</Header>)
    expect(screen.getByRole('h1')).toBeInTheDocument()
  })
})
