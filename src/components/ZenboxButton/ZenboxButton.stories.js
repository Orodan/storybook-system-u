import ZenboxButton from './ZenboxButton.vue'

export default {
  title: 'Components/ZenboxButton',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary'] } },
    size: { control: { type: 'select', options: ['small', 'large'] } },
    content: { name: 'slot' }
  },
  args: {
    color: 'primary',
    size: 'large',
    disabled: false,
    content: 'zenbox-button'
  }
}

const Template = (args, { argTypes }) => {
  return {
    components: { ZenboxButton },
    props: Object.keys(argTypes),
    template: `
      <zenbox-button :color="$props.color" :size="$props.size" :disabled="$props.disabled">
        {{ $props.content }}
      </zenbox-button>
    `
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

