import { useNavigate } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { ComponentType } from 'react';




function App({navigate}) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-slate-100 w-[300px] p-6 rounded-md shadow-2xl flex flex-col items-center'>
        <p className='font-semibold text-lg text-center font-sans mb-4'>Login</p>

        <div className='w-full flex flex-col items-center'>
          <Input
            placeholder='Email'
            className='mb-1.5 h-10 w-full border transition-colors hover:border-slate-400 '
          />
          <Input
            type='password'
            placeholder='********'
            className='h-10 w-full border transition-colors hover:border-slate-400'
          />
        </div>

        <div className='w-full mt-6'>
          <Button className='w-full' variant='outline'>
            Sign in
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
