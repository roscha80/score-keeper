import React from 'react'
import Nav from './Nav'

export default {
  title: 'Navigation',
  component: Nav,
}

const Template = args => <Nav {...args} />

export const Default = Template.bind({})
Default.args = {
  currentPageId: 'play',
  pages: [
    { title: 'Play', id: 'play' },
    { title: 'History', id: 'history' },
  ],
}
