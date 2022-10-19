import { render } from '@testing-library/react'
import { Logo } from '.'

describe('<Logo/>', () => {
  it('should match to snapshot ', () => {
    const { container } = render(<Logo />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
