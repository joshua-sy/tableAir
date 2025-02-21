import { Menu, Bell, CircleHelp, ChevronRight } from 'lucide-react';
import SearchBar from '~/components/dashboard/searchBar';
import Image from 'next/image';
import { UserButton } from '@clerk/clerk-react'; // Import the UserButton component from Clerk


export default function Dashboard() {
  return (
    <>
    <div className="w-full justify-between border-b border-gray-300 flex items-center pl-10 pr-10 pt-5 pb-3">
      <div className='flex justify-normal items-center w-1/3'>
        <Menu className='h-8 w-8 mr-4'/>
        <div className='flex items-center w-36 justify-between'>
          <div className='relative w-12 h-12'>
            <Image src="/airtable.svg" alt="Logo" layout='fill' objectFit='contain' />
          </div>
          <div className='text-2xl font-semibold'>
            Tableair 
          </div>
        </div>
      </div>

      <div className='w-1/4'>
        <SearchBar />
      </div>

     
      <div className='flex w-1/3 pl-auto items-center justify-end'>
          <div className='flex items-center justify-between w-44'>
            <div className='flex items-center'>
              <CircleHelp className='mr-2'/>
              <div className='text-lg'>
                Help
              </div>
            </div>
            <div className='border border-gray-400 rounded-full p-2'>
              <Bell className='h-6 w-6'/>
            </div>
          </div>
        </div>

    </div>

    <div className='flex w-full h-screen'>
      <div id='sideBar' className='w-96 border-r border-gray-300 h-full pl-3 pr-3 pt-5 pb-2'>
        <div id="home-container" className='flex justify-between items-center p-2'>
          
          <div className='text-lg font-semibold '>
            Home
          </div>
          <ChevronRight className='font-light h-5 w-5'/>
        </div>
      </div>
      <div id='dashboard' className='w-screen bg-slate-50'>
        Home
      </div>
    </div>


    
    </>
  )
  
}