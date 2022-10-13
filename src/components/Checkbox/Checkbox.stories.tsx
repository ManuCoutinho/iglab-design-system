import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '.'
import { Text } from '../Text'

export default {
  title: 'Component/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex w-full items-center gap-3 p-4'>
          {Story()}
          <Text size='sm'>Lembrar de mim por 30 dias.</Text>
        </div>
      )
    }
  ]
} as Meta

export const Default: StoryObj = {}
