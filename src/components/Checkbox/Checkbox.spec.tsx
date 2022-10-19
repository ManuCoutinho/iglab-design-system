import { screen, render, fireEvent } from '@testing-library/react'
import { Checkbox } from '.'

describe('<Checkbox/>', () => {
  it('should render Checkbox correctly ', () => {
    render(<Checkbox />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-checked',
      'false'
    )
  })
  it('should render Checkbox with checked attribute ', () => {
    render(<Checkbox />)
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(checkbox).toHaveAttribute('aria-checked', 'true')
  })
  it('match to snapshot', () => {
    const { container } = render(<Checkbox />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
