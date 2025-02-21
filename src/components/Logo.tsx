import Image from 'next/image';

export default function Logo() {
  return (
    <>
    <div className='flex items-center w-36 justify-between'>
      <div className='relative w-12 h-12'>
        <Image src="/airtable.svg" alt="Logo" layout='fill' objectFit='contain' />
      </div>
      <div className='text-2xl font-semibold'>
        Tableair 
      </div>
    </div>
    </>
  )
}