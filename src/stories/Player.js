import './Player.css'
import PropTypes from 'prop-types'
import PlayerForm from './PlayerForm'
import Button from './Button'

PlayerForm.propTypes = {
  name: PropTypes.node,
  onClick: PropTypes.func,
  isActiveUp: PropTypes.bool,
  isActiveDown: PropTypes.bool,
  score: PropTypes.number,
}

export default function Player({
  name,
  onClick,
  isActiveUp,
  isActiveDown,
  score,
}) {
  return (
    <section className="Player">
      <h2 className="Player__Name">{name}</h2>
      <Button
        onClick={onClick}
        className={isActiveUp ? 'Button active' : 'Button'}
      >
        UP
      </Button>
      <h3 className="Player__Score">{score}</h3>
      <Button
        onClick={onClick}
        className={isActiveDown ? 'Button active' : 'Button'}
      >
        DOWN
      </Button>
    </section>
  )
}
