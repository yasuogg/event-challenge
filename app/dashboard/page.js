import Logo from '@/components/logo'
import Table, { SortableTable } from '@/components/users_tabel'
import Image from 'next/image'

export default function Dashboard() {

  const sampleData = [
    { name: 'John Doe', position: 'Developer', status: 'sohaibben52@gmail.com' },
    { name: 'Jane Smith', position: 'Developer', status: 'sohaibben52@gmail.com' },
    { name: 'Jane Smith', position: 'Developer', status: 'sohaibben52@gmail.com' },
    { name: 'Jane Smith', position: 'Developer', status: 'sohaibben52@gmail.com' },
    { name: 'Jane Smith', position: 'Developer', status: 'sohaibben52@gmail.com' },
  ]
  return (
    <>
    <div className='flex justify-between items-center pr-16'>
    <Logo/>
    <button className='flex bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-9 rounded-full'>Quit</button>
    </div>
    <div className='flex space-x-[50%] justify-center items-center'>
    <button className='flex bg-[#F39C12] hover:bg-amber-500	 text-white font-bold py-3 px-9 rounded-full'>send email</button>
    <button className='flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded-full'>send email</button>
    </div>
<div className='flex justify-center items-center  w-100% h-full p-10'>
    <div className='bg-[#0053B5] w-full h-full text-[#ffffff]'>
      <Table data={sampleData} />
       
    </div>
    </div>
    </>
  )
}
