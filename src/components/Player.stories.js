import Player from './Player'

export default {
  title: 'Player',
  component: Player,
}

const Template = args => <Player {...args} />

export const DefaultPlayer = Template.bind({})
DefaultPlayer.args = {
  name: 'John Doe',
  score: 10,
}

export const DifferentPlayer = Template.bind({})
DifferentPlayer.args = {
  name: 'Jane Doe',
  score: 400,
}
