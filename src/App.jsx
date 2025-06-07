import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { useForm } from 'react-hook-form'

function App() {
let [bill, setBill] = useState('')
let {register, handleSubmit, reset} =useForm();
function submitHandler(data){
  let amount = data.amount;
  let users= data.users;

  setBill(Math.floor((amount/users)));
  reset();
}
  return (
    <>
     <div className="flex mx-auto h-screen w-full items-center justify-center">
      <form onSubmit={handleSubmit(submitHandler)} className='w-[400px] text-center' action="">
        <h1 className='text-5xl font-black'>{bill}</h1>
        <h1 className="text-xl font-bold">Split the bill among friends?!</h1>
        <p className='mtext-sm text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, temporibus.</p>
        <div className="mt-4 flex gap-2">
          <input type="number" {...register('amount')} className='w-1/2 border p-3 outline-none rounded-xl' placeholder='Enter billing amount'/>
          <input type="number" {...register('users')} className='w-1/2 border p-3 outline-none rounded-xl' placeholder='Enter total users'/>
        </div>
        <input className='hover:cursor-pointer mt-4 rounded-xl w-full text-white bg-black p-3' type="submit" value='Split the Bill' />
      </form>
     </div>
    </>
  )
}

export default App;
