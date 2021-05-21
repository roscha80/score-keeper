import PropTypes from 'prop-types'

InputField.propTypes = {
  onSubmit: PropTypes.func,
}

export default function InputField({ label, ...inputProps }) {
  return (
    <label>
      {label}
      <input {...inputProps} />
    </label>
  )
}
