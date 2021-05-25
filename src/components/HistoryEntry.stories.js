import HistoryEntry from './HistoryEntry'

export default {
  title: 'HistoryEntry',
  component: HistoryEntry,
}

const Template = args => <HistoryEntry {...args} />

export const DefaultHistoryEntry = Template.bind({})
DefaultHistoryEntry.args = {
  gameName: 'Tetris',
  players: [
    { name: 'Peter Parker', score: 240 },
    { name: 'Paula Parker', score: 500 },
  ],
}
