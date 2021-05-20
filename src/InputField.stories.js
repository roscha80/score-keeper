import InputField from './InputField'

export default {
  title: 'InputField',
  component: InputField,
}

const Template = args => <InputField {...args} />
export const DefaultInputField = Template.bind({})
DefaultInputField.args = {}
