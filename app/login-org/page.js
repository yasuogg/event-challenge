import Logo from '@/components/logo'
import Image from 'next/image'

export default function login() {
  return (
    <>
    <Logo/>
    <div className='flex justify-evenly'> 
    <div className='flex justify-center items-center lg:flex lg:justify-start lg:p-32  w-50% h-50% text-gray-500'>
    <div className='flex-row text-gray justify-center items-center '>
      <div className='flex-row justify-center items-center'>
      <h1 className='text-6xl font-bold text-[#faaa1f] text-center'>Dash
      <br/><p className='text-[#0053B5]'>Connect</p></h1>
        <div className='flex-col p-1'>
    <label className='flex p-2'>Username</label>
    <input className='shadow appearance-none border-2 rounded w-40% text-2xl py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-[#0053B5] rounded-full'/>
    </div>
    <div className='flex-col p-1'>
    <label className='flex p-2'>Password</label>
    <input type='password' className='shadow appearance-none border-2 rounded text-2xl w-50% py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-[#0053B5] rounded-full'/>
    </div>
    </div>
    <div className='flex pt-7 justify-center items-center'>
    <button className='flex text-2xl  bg-[#0053B5] hover:bg-sky-600 text-white font-bold py-3 px-20 rounded-full'>Login</button>
    </div>
    </div>
    </div>
    <Image src="/dash.png" className='hidden lg:block' width={650} height={100}/>
    </div>
    </>
  )
}
