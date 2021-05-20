import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

InputField.propTypes = {
  onSubmit: PropTypes.func,
}

export default function InputField({ onSubmit }) {
  return (
    <InputFieldWrapper onSubmit={handleSubmit}>
      <label>
        <input name="name" type="text" />
      </label>
    </InputFieldWrapper>
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

const InputFieldWrapper = styled.form`
  display: grid;
  margin: 20px 0;
`
