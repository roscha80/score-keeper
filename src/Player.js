import './Player.css'
import PropTypes from 'prop-types'
import Button from './Button'

Player.propTypes = {
  name: PropTypes.string,
  onMinus: PropTypes.func,
  onPlus: PropTypes.func,
  score: PropTypes.number,
}

export default function Player({ name, onMinus, onPlus, score }) {
  return (
    <section className="Player">
      <h2 className="Player__Name">{name}</h2>
      <Button onClick={onMinus}>-</Button>
      <h3 className="Player__Score">{score}</h3>
      <Button onClick={onPlus}>+</Button>
    </section>
  )
}
