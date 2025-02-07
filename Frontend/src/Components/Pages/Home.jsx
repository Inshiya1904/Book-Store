import image from './../../assets/bookshelf.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <div className=' max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[950px]  xl:max-w-[1250px] mx-auto'>
    <div className='flex lg:flex-row flex-col gap-[20px] lg:gap-[100px] py-[50px]'>
      <div className='flex flex-col gap-[20px] basis-[60%] py-12'>
        <h1 className='text-[40px]  xl:text-[50px] font-semibold' >BOOK STORE FOR YOU</h1>
        <p className='text-slate-500 mt-0 mb-2'>Checkout The Books From here</p>
        <Link to='/books' className='bg-sky-400 hover:bg-sky-600 w-[30%] lg:w-[18%] p-[10px] px-4 rounded-md'>View Books</Link>
      </div>

      <div className='basis-[40%] ml-[100px]'>
        <img src={image} className=' w-[100%] h-[100%] lg:w-[80%] lg:h-[90%]' alt="" />
      </div>
    </div>

   </div>
  )
}
