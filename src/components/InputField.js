import PropTypes from 'prop-types'
import styled from 'styled-components'

InputField.propTypes = {
  onSubmit: PropTypes.func,
}

export default function InputField({ label, ...inputProps }) {
  return (
    <Label>
      {label}
      <input {...inputProps} />
    </Label>
  )
}

const Label = styled.label`
  background: wheat !important;
  padding: 15px;
`
