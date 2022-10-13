import { ComponentStory, Meta } from '@storybook/react'
import { Button } from '.'
import { ButtonProps } from './types'

export default {
  title: 'Component/Button',
  component: Button,
  args: {
    children: 'Create account'
  },
  argTypes: {}
} as Meta<ButtonProps>

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <div className='p-4 w-[400px]'>
      <Button {...args} />
    </div>
  )
}
export const Default = Template.bind({})
