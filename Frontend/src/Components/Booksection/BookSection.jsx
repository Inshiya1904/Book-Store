import axios from 'axios'
import React from 'react'
import { Link, useParams } from 'react-router-dom'


function BookSection({ data }) {
    //  console.log(data)
  
    
    // delete book

    const removeBook = async(id) => {
      console.log(id)
      const response = await axios.delete(`https://book-store-eg14.onrender.com/deleteBook/${id}`)
      if (response.data.success)
      {
        alert("Book Deleted Successfully")
      }
      else
      {
        alert('Error')
      }
      
    }
      
  return (
    <div className='flex gap-[50px] justify-around items-center flex-wrap py-10'>
        {
            data.map((item, index) =>{
                return(
                    <div key={index}>
                    <div className='w-[200px] h-[360px] rounded-lg shadow-xl my-[20px}'>
                      <img className='rounded-tl-lg	rounded-tr-lg  w-[200px] h-[250px]' src={item.image} alt='/'/>
                      <h3 className='text-[15px] font-normal  p-2'>{item.bookname.slice(0, 20)}...</h3>
                      <p className='p-2 font-normal  mt-[-10px]'>Rs.{item.price}</p>
                      <div className='flex justify-around items-center'>
                       <Link to={`/editBook/${item._id}`}>
                       <button className='bg-sky-600 text-white p-[5px_10px] rounded' >Update</button>
                       </Link> 
                        <button onClick={() =>removeBook(item._id)}
                        className='bg-rose-500 text-white p-[5px_10px] rounded'>Delete</button>
                      </div>
                    </div>
                    </div>
                

                )
            })
        }
    </div>
  )
}

export default BookSection
