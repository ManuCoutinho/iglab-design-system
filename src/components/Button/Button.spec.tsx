import { screen, render } from '@testing-library/react'
import { Button } from '.'

describe('<Button/>', () => {
  it('should render a Button component correctly', () => {
    render(<Button>Text</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('match to snapshot', () => {
    const { container } = render(<Button>Text</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
