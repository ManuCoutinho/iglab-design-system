import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { HeadingProps } from './types'

export const Heading: React.FC<HeadingProps> = ({
  size = 'md',
  children,
  asChild,
  className
}) => {
  const Component = asChild ? Slot : 'h2'
  return (
    <Component
      className={clsx(
        'text-gray-100 font-sans font-bold',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg'
        },
        className
      )}
    >
      {children}
    </Component>
  )
}
