import { Slot } from '@radix-ui/react-slot'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = (props) => {
  const Component = props.asChild ? Slot : 'button'
  return (
    <Component
      {...props}
      className={
        'text-black font-sans font-semibold py-3 px-4 bg-cyan-500 rounded text-sm w-full hover:bg-cyan-300 transition-colors delay-75 focus:ring-2 focus:ring-cyan-500 focus:outline-cyan-300 '
      }
    >
      {props.children}
    </Component>
  )
}
