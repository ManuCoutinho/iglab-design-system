import { ComponentStory, Meta, StoryObj } from '@storybook/react'
import { Heading } from '.'
import { HeadingProps } from './types'

export default {
  title: 'Component/Heading',
  component: Heading,
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
} as Meta<HeadingProps>

const Template: ComponentStory<typeof Heading> = (args) => {
  return (
    <div className='p-4'>
      <Heading {...args} />
    </div>
  )
}
export const Default = Template.bind({})

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>H1 tag</h1>,
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
