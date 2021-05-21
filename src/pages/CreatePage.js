import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Button from '../components/Button'
import InputField from '../components/InputField'

CreatePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function CreatePage({ onSubmit }) {
  return (
    <Grid>
      <Form onSubmit={handleSubmit}>
        <InputField
          label="Name of Game:"
          name="name"
          placeholder="Insert Game name"
        />
        <InputField
          label="Player names:"
          name="players"
          placeholder="Insert Player names"
        />
        <Button>Create Game</Button>
      </Form>
    </Grid>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const playersInput = form.elements.players
    const gameName = nameInput.value
    const players = playersInput.value
      .split(',')
      .map(name => ({ name: name.trim(), score: 0 }))
    const game = {
      gameName,
      players,
    }
    onSubmit(game)
  }
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  height: 100vh;
`

const Form = styled.form`
  display: grid;
  gap: 10px;

  label {
    display: grid;
    gap: 5px;
  }
  input {
    padding: 5px;
  }
`
