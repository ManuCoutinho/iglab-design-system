import { ComponentStory, Meta, StoryObj } from '@storybook/react'
import { Text } from '.'
import { TextProps } from './types'

export default {
  title: 'Component/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit.',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

const Template: ComponentStory<typeof Text> = (args) => {
  return (
    <div className='p-4'>
      <Text {...args} />
    </div>
  )
}
export const Default = Template.bind({})

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <strong>Strong tag</strong>,
    size: 'md'
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}
