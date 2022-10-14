import { FormEvent, useState } from 'react'
import axios from 'axios'
import { Envelope, Lock } from 'phosphor-react'
import { Button } from '../../components/Button'
import { Checkbox } from '../../components/Checkbox'
import { Heading } from '../../components/Heading'
import { Input } from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Text } from '../../components/Text'

export const Home: React.FC = () => {
  const [authenticated, setIsAuthenticated] = useState(false)
  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault()
    await axios.post('/session', {
      email: 'email.teste@email.com',
      password: 'supersenha'
    })
    setIsAuthenticated(true)
  }
  return (
    <main className='h-screen w-screen bg-gray-900 flex flex-col gap-4 items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center gap-3'>
        <Logo />
        <Heading size='lg'>Ignite Lab</Heading>
        <Text className='text-gray-400 mt-1'>Faça o login e comece a usar</Text>
      </header>
      <form
        className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'
        onSubmit={handleSignIn}
      >
        {authenticated && <Text size='sm'>Login realizado!</Text>}
        <label className='flex flex-col gap-4 mb-3' htmlFor='email'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <Input.Root>
            <Input.Icon>
              <Envelope />
            </Input.Icon>
            <Input.Input
              type='email'
              placeholder='Digite seu e-mail'
              id='email'
            />
          </Input.Root>
        </label>
        <label className='flex flex-col gap-4 ' htmlFor='password'>
          <Text className='font-semibold'>Sua senha:</Text>
          <Input.Root>
            <Input.Icon>
              <Lock />
            </Input.Icon>
            <Input.Input type='password' placeholder='******' id='password' />
          </Input.Root>
        </label>
        <label
          htmlFor='remember'
          className='flex items-center gap-2 cursor-pointer'
        >
          <Checkbox id='remember' />
          <Text size='sm'>Lembrar de mim por 30 dias</Text>
        </label>
        <Button type='submit'>Entrar na plataforma</Button>
      </form>
      <footer className='flex flex-col items-center gap-4'>
        <Text asChild size='sm'>
          <a
            href='#'
            className='text-gray-400 underline hover:text-gray-200 transition-colors'
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size='sm'>
          <a
            href='#'
            className='text-gray-400 underline hover:text-gray-200 transition-colors'
          >
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </main>
  )
}
