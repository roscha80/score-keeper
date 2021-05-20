import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button', () => {
  it('calls onClick goToPlay correctly', async () => {
    const goToPlay = jest.fn()
    render(<Button onClick={goToPlay}>PLAY</Button>)
    const button = screen.getByRole('button', { name: 'PLAY' })
    userEvent.click(button)
    expect(goToPlay).toHaveBeenCalledTimes(1)
  })
  it('calls onClick goToHistory correctly', async () => {
    const goToHistory = jest.fn()
    render(<Button onClick={goToHistory}>HISTORY</Button>)
    const button = screen.getByRole('button', { name: 'HISTORY' })
    userEvent.click(button)
    expect(goToHistory).toHaveBeenCalledTimes(1)
  })
  it('contains a text', async () => {
    render(<Button onClick={jest.fn()}>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
  })
})
