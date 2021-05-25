import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <SubmitForm onSubmit={handleSubmit}>
      <Label>
        Add player:
        <input name="name" type="text" placeholder="Player name" />
      </Label>
    </SubmitForm>
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

const SubmitForm = styled.form`
  display: grid;
  margin: 20px 0;
`
const Label = styled.label`
  display: grid;
  margin: 20px 0;
`
