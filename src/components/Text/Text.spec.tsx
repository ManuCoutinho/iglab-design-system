import { screen, render } from '@testing-library/react'
import { Text } from '.'

describe('<Text/>', () => {
  it('should render Text correctly ', () => {
    render(<Text>Text</Text>)
    expect(screen.getByText(/Text/i)).toBeInTheDocument()
  })
  it('should render Text with right size', () => {
    render(<Text size='sm'>Text</Text>)
    expect(screen.getByText(/Text/i)).toHaveClass('text-xs')
  })
  it('should render Text with className prop', () => {
    render(<Text className='text-blue-100'>Text</Text>)
    expect(screen.getByText(/Text/i)).toHaveClass('text-blue-100')
  })
  it('match to snapshot', () => {
    const { container } = render(<Text>Text</Text>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
