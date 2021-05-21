import HistoryPage from './pages/HistoryPage'

export default {
  title: 'Pages/HistoryPage',
  component: HistoryPage,
}

const Template = args => <HistoryPage {...args} />

export const Default = Template.bind({})
Default.args = {
  games: [
    {
      gameName: 'Wizard',
      players: [
        { name: 'Rob', score: 0 },
        { name: 'Achim', score: 30 },
      ],
    },
    {
      gameName: 'Schach',
      players: [
        { name: 'Mimi', score: 100 },
        { name: 'Peterchen', score: 30 },
      ],
    },
  ],
}
