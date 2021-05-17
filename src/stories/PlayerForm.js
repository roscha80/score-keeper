import React from 'react'
import './PlayerForm.css'

export default function PlayerForm({ onSubmit }) {
  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <label>
        Add player:
        <input name="name" type="text" placeholder="Player name" />
      </label>
    </form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
  }
}
