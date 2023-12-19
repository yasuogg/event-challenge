import Logo from '@/components/logo'
import Image from 'next/image'

export default function login() {
  return (
    <>
    <Logo/>
    <div className='flex justify-center items-center text-gray-500'>
    <div className='flex-row text-gray justify-center items-center w-100% h-100% '>
      <div className='flex-row justify-center items-center'>
        <div className='flex-col p-1'>
    <label className='flex p-2'>Username</label>
    <input className='shadow appearance-none border rounded w-50% py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-[#0053B5]'/>
    </div>
    <div className='flex-col p-1'>
    <label className='flex p-2'>password</label>
    <input type='password' className='shadow appearance-none border rounded w-50% py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-[#0053B5]'/>
    </div>
    </div>
    <div className='flex pt-7 justify-center items-center'>
    <button className='flex  bg-[#0053B5] hover:bg-sky-700 text-white font-bold py-4 px-16 rounded-full'>Login</button>
    </div>
    </div>
    </div>
    </>
  )
}
