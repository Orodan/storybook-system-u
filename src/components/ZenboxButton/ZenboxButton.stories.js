import ZenboxButton from './ZenboxButton.vue'

export default {
  title: 'Components/ZenboxButton',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary'] } },
    size: { control: { type: 'select', options: ['small', 'large'] } },
  },
  args: {
    color: 'primary',
    size: 'large',
    disabled: false,
    slot: 'zenbox-button'
  }
}

const Template = (args, { argTypes }) => {
  return {
    components: { ZenboxButton },
    props: Object.keys(argTypes),
    template: '<zenbox-button v-bind="$props">{{ $props.slot }}</zenbox-button>'
  }
}

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary'
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}

