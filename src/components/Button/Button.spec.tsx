import { screen, render } from '@testing-library/react'
import { Button } from '.'

describe('<Button/>', () => {
  it('should render ', () => {
    render(<Button>Text</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
