import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { TextProps } from './types'

export const Text: React.FC<TextProps> = ({
  size = 'md',
  children,
  asChild,
  className
}) => {
  const Component = asChild ? Slot : 'span'
  return (
    <Component
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Component>
  )
}
