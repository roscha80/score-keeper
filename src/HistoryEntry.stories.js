import HistoryEntry from './HistoryEntry'

export default {
  title: 'HistoryEntry',
  component: HistoryEntry,
}

const Template = args => <HistoryEntry {...args} />

export const DefaultHistoryEntry = Template.bind({})
DefaultHistoryEntry.args = {
  name: 'John Doe',
  score: 1250,
}
