import { Slot } from '@radix-ui/react-slot'
import { InputIconProps, InputProps, InputRootProps } from './types'

const InputRoot: React.FC<InputRootProps> = ({ children }) => {
  return (
    <div className='h-12 flex items-center gap-3 w-full py-4 px-3 rounded bg-gray-800 focus-within:ring-2 focus-within:outline-cyan-300 focus-within:ring-cyan-500'>
      {children}
    </div>
  )
}

const InputIcon: React.FC<InputIconProps> = ({ children }) => {
  return <Slot className='w-6 h-6 text-gray-400'>{children}</Slot>
}

const InputContent: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className='outline-0 bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 '
    />
  )
}

InputRoot.displayName = 'Input.Root'
InputIcon.displayName = 'Input.Icon'
InputContent.displayName = 'Input.Content'

export const Input = {
  Root: InputRoot,
  Input: InputContent,
  Icon: InputIcon
}
