import CreatePage from './pages/CreatePage'

export default {
  title: 'Pages/CreatePage',
  component: CreatePage,
}

const Template = args => <CreatePage {...args} />
export const Default = Template.bind({})
Default.args = {}
