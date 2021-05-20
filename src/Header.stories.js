import Header from './Header'

export default {
  title: 'Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const DefaultHeader = Template.bind({})
DefaultHeader.args = {
  name: 'Score Master 3000',
}
