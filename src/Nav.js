import PropTypes from 'prop-types'
import Button from './Button'
import styled from 'styled-components/macro'

Nav.propTypes = {
  goToHistory: PropTypes.func,
  goToPlay: PropTypes.func,
  isActiveLeft: PropTypes.func,
  isActiveRight: PropTypes.func,
}

export default function Nav({ goToPlay, goToHistory }) {
  return (
    <NavBar>
      <Button isActiveLeft onClick={goToPlay}>
        PLAY
      </Button>
      <Button isActiveRight onClick={goToHistory}>
        HISTORY
      </Button>
    </NavBar>
  )
}

const NavBar = styled.section`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  background-color: thistle;
`
