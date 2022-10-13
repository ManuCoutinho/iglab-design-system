import { Slot } from '@radix-ui/react-slot'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({ children, asChild }) => {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      className={
        'text-black font-sans font-semibold py-4 px-3 bg-cyan-500 rounded text-sm w-full hover:bg-cyan-300 transition-colors delay-75 focus:ring-2 focus:ring-cyan-500 focus:outline-cyan-300 '
      }
    >
      {children}
    </Component>
  )
}
