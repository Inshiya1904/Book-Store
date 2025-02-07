
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './nav.css'

function Navbar() {


  return (
    <div>
        <nav className='w-full h-full drop-shadow-xl bg-slate-50'>
           <div className='flex items-center justify-between max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[950px]  xl:max-w-[1250px] mx-auto py-4 ' >
           {/* <div className='mr-[30px] lg:hidden'>
            <FaBars />
            </div> */}
            <div className='xl:w-[45%]  text-[30px] font-bold hover:scale-[101%] transition-all'>
            <Link to='/'> <a className='cursor-pointer '>BookStore</a></Link>
            </div>
            <ul className='flex items-center gap-10 font-semibold cursor-pointer xs:text-[10px] sm:text-[15px] md:text-[17px]'>
                <Link to='/'>HOME</Link>
                <Link to='/books'>BOOKS</Link>
                <Link to='/addBooks'>ADD BOOKS</Link>
                
            </ul>
           </div>
            
        </nav>
    </div>
  )
}

export default Navbar