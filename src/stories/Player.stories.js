import Player from './Player'

export default {
  title: 'Player',
  component: Player,
}

const Template = args => <Player {...args} />

export const DefaultPlayer = Template.bind({})
DefaultPlayer.args = {
  name: 'John Doe',
  isActiveUp: false,
  score: 1000,
  isActiveDown: false,
}

export const ActiveButtonUpPlayer = Template.bind({})
ActiveButtonUpPlayer.args = {
  name: 'John Doe',
  isActiveUp: true,
  score: 10000,
  isActiveDown: false,
}

export const ActiveButtonDownPlayer = Template.bind({})
ActiveButtonDownPlayer.args = {
  name: 'John Doe',
  isActiveUp: false,
  score: 100,
  isActiveDown: true,
}
