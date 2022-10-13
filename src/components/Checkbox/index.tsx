import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export const Checkbox: React.FC = () => {
  return (
    <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded transition focus-within:ring focus-within:ring-cyan-500 focus-within:outline-cyan-300'>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='w-5 h-5 text-cyan-500' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
