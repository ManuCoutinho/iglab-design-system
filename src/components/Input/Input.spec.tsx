import { screen, render } from '@testing-library/react'
import { Input } from '.'

describe('<Input/>', () => {
  it('should render Input correctly ', () => {
    render(<Input.Input placeholder='test' />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'test')
  })
  it('should render Input Root correctly ', () => {
    render(<Input.Root>Test</Input.Root>)
    expect(screen.getByText(/test/i)).toBeInTheDocument()
  })
  it('should render Input Icon correctly ', () => {
    render(
      <Input.Icon>
        <p>Icon</p>
      </Input.Icon>
    )
    expect(screen.getByText(/icon/i)).toBeInTheDocument()
  })
  it('match to snapshot', () => {
    const { container } = render(
      <Input.Root>
        <Input.Icon>Icon</Input.Icon>
        <Input.Input />
      </Input.Root>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
