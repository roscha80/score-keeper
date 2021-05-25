import GamePage from './pages/GamePage'

export default {
  title: 'Pages/GamePage',
  component: GamePage,
}

const Template = args => <GamePage {...args} />

export const Default = Template.bind({})
Default.args = {
  gameName: 'Rommee',
  players: [
    { name: 'Peter', score: 30 },
    { name: 'Paul', score: 50 },
  ],
}
