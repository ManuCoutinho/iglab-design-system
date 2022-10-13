/* eslint-disable react/jsx-key */
import { Meta, StoryObj } from '@storybook/react'
import { Envelope, Lock } from 'phosphor-react'
import { Input } from '.'
import { InputRootProps } from './types'

export default {
  title: 'Component/Input',
  component: Input.Root,
  args: {
    children: [
      <Input.Icon>
        <Envelope />
      </Input.Icon>,
      <Input.Input placeholder='Digite um texto' type='email' />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<InputRootProps>

export const Default = {}
export const Password: StoryObj<InputRootProps> = {
  args: {
    children: [
      <Input.Icon>
        <Lock />
      </Input.Icon>,
      <Input.Input placeholder='Digite sua senha' type='password' />
    ]
  }
}
export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: <Input.Input placeholder='Digite sua senha' type='password' />
  }
}
