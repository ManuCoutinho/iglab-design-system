import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { Home } from '.'

export default {
  title: 'Page/Home',
  component: Home,
  parameters: {
    msw: {
      handlers: [
        rest.post('/session', (req, res, ctx) => {
          return res(
            ctx.json({
              message: 'Login realizado!'
            })
          )
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.type(
      canvas.getByPlaceholderText('Digite seu e-mail'),
      'email.teste@email.com'
    )
    userEvent.type(canvas.getByPlaceholderText('******'), 'supersenha')
    userEvent.click(canvas.getByRole('button'))
    await waitFor(() => {
      return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}
