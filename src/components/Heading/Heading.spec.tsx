import { screen, render } from '@testing-library/react'
import { Heading } from '.'

describe('<Heading/>', () => {
  it('should render Heading correctly ', () => {
    render(<Heading>Text</Heading>)
    expect(screen.getByRole('heading', { name: /Text/i })).toBeInTheDocument()
  })
  it('should render Heading with right size', () => {
    render(<Heading size='lg'>Text</Heading>)
    expect(screen.getByRole('heading', { name: /Text/i })).toHaveClass(
      'text-2xl'
    )
  })
  it('should render Heading with className prop', () => {
    render(<Heading className='text-red-100'>Text</Heading>)
    expect(screen.getByRole('heading', { name: /Text/i })).toHaveClass(
      'text-red-100'
    )
  })
  it('match to snapshot', () => {
    const { container } = render(<Heading>Text</Heading>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
