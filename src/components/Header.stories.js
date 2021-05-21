import Header from './Header'

export default {
  title: 'Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const DefaultHeader = Template.bind({})
DefaultHeader.args = {
  children: 'Score Master 3000',
}
