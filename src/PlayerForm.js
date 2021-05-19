import PropTypes from 'prop-types'
import styled from 'styled-components'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <Wrapper onSubmit={handleSubmit}>
      <label className="Button__Form">
        Add player:
        <input name="name" type="text" placeholder="Player name" />
      </label>
    </Wrapper>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
    form.reset()
    input.focus()
  }
}

const Wrapper = styled.form`
  display: grid;
  margin: 20px 0;
  label {
    display: grid;
    margin: 20px 0;
  }
`
