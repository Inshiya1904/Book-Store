import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const navigate = useNavigate();

   const [Data, setData] = useState({
      bookname:"",
      author:"",
      description:"",
      image:"",
      price:"",
   })

   const { id } = useParams();
    const fetchSingleBookItem = async () => {
        const response = await axios.get(`https://book-store-eg14.onrender.com/getbooks/${id}`)
       console.log(response.data)
       setData(response.data.data)
      
    }
    useEffect(() => {
        fetchSingleBookItem();
      }, [])
    
   const change = (e) => {
      const { name, value } = e.target;
      setData({...Data,[name]:value})
      console.log(Data)
   }
    const submit = async(e) => {
      e.preventDefault();
        await axios.put(`https://book-store-eg14.onrender.com/updateBook/${id}`,Data).then( (res) => {
         console.log(res)
            alert(res.data.message)
             navigate('/books');
            
         }).catch( (error) =>{
            console.log(error)
      })
   }
  return (
      <div className='bg-gray-800 min-h-[80%]	'>
        <div className='max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[950px] xl:max-w-[1250px] mx-auto py-10   '>
            <div className=' py-5'>
            <div className= 'max-w-[350px] md:max-w-[550px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto'>
               <label className='font-medium text-white text-[20px]' htmlFor="" >Book Name </label><br />
               <input 
               name='bookname'
               value={Data.bookname}
               onChange={change}
               className='bg-white	 w-[100%]  rounded p-[8px]	focus:outline-none' type="text" placeholder='Enter Book Name'/>
            </div>
            <br />
            <div className='max-w-[350px] md:max-w-[550px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto' >
               <label className='font-medium text-white text-[20px]' htmlFor="" >Author </label>
               <input 
                name='author'
               value={Data.author}
               onChange={change}
                className='bg-white w-[100%] rounded p-[8px]	focus:outline-none'
                 type="text" placeholder='Enter Book Author Name'/>
            </div>
            <br />
            <div className='max-w-[350px] md:max-w-[550px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto'>
               <label className='font-medium text-white text-[20px]' htmlFor="" >Description  </label>
               <input 
               name='description'
               value={Data.description}
               onChange={change}
               className='bg-white w-[100%] rounded p-[8px]	focus:outline-none ' 
               type="text" placeholder='Enter Book Description'/>
            </div>
            <br />
            <div className='max-w-[350px] md:max-w-[550px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto' >
               <label className='font-medium text-white text-[20px]' htmlFor="" >Image  </label>
               <input 
               name='image'
               value={Data.image}
               onChange={change}
               className='bg-white w-[100%] rounded p-[8px]	focus:outline-none '
                type="text" placeholder='Enter the book Image'/>
            </div>
            <br />
            <div className='max-w-[350px] md:max-w-[550px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto' >
               <label className='font-medium text-white text-[20px]' htmlFor="" >Price  </label>
               <input 
               name='price'
               value={Data.price}
               onChange={change}
               className='bg-white w-[100%] rounded p-[8px]	focus:outline-none '
                type="number" placeholder='Enter the Book Price'/>
            </div>
            <br />
            <div className='max-w-[1200px] mx-auto text-center  '>
            <button onClick={submit} type='submit'
            className='bg-[#0a7c64] p-[10px_15px] w-[10%] text-white text-[20px] font-medium rounded'>Submit</button>
            </div>

            </div>
            
        </div>
    </div>
    
  )
}

export default EditBook
