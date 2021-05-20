import Nav from './Nav'

export default {
  title: 'Nav',
  component: Nav,
}

const Template = args => <Nav {...args} />

export const DefaultNav = Template.bind({})
DefaultNav.args = {}

export const ActiveLeftNav = Template.bind({})
DefaultNav.args = {
  isActiveLeft: true,
  isActiveRight: false,
}

export const ActiveRightNav = Template.bind({})
DefaultNav.args = {
  isActiveLeft: false,
  isActiveRight: true,
}
