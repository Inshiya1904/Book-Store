import { useEffect, useState } from 'react'
import axios from 'axios'
import BookSection from '../Booksection/BookSection';

function Books() {
 const [Data, setData] = useState();

  useEffect( () => {
    const fetchAllBooks = async () => {
      await axios.get("https://book-store-eg14.onrender.com/getbooks")
      .then((res) =>{
        // console.log(res.data.books);
        setData(res.data.data);
      })
    };
    fetchAllBooks();
  })
  return (
    <div className='max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[950px]  xl:max-w-[1250px] mx-auto'>
        <div className='flex justify-center text-center py-5'>
        <h1 className='text-[25px] font-bold'>Books Section</h1>
        </div>
        {Data ? <BookSection data={Data} setData={setData}/> : <div>Loading...</div>}
        
    </div>
  )
}

export default Books
