const express = require('express');
const bookRoute = express.Router();
const bookModel = require('../models/bookModel')

//post request
bookRoute.post('/add',async(req,res)=>{
    const addBook = new bookModel({
        bookname:req.body.bookname,
        description:req.body.description,
        price:req.body.price,
        author:req.body.author,
        image:req.body.image,
       })
    try {
       
       await addBook.save()
       res.json({success:true,message: "Book Added Successfully",data:addBook})
        

    } catch (error) {
        console.log(error);
        res.json({success:false,message: "Internal Server Error"})

    }

})

// get request
bookRoute.get('/getbooks',async(req,res) => {
    try {
    
      let books =  await bookModel.find();
      res.json({success:true,data:books})
    } catch (error) {
        console.log(error);
        res.json({success:false,message: "Internal Server Error"})
    }
})

// get request by id
bookRoute.get('/getbooks/:id',async(req,res) => {
    const id = req.params.id
    try {
     let book =  await bookModel.findById(id);
     res.json({success:true,data:book})
    } catch (error) {
        console.log(error)
        res.json({success:false,message: "Internal Server Error"})

    }
})

// update book by id
bookRoute.put('/updateBook/:id',async(req,res) => {
    try {
        const id = req.params.id;
    //     let image_filename = `${req.file.filename}`
        const {bookname,description,price,author,image} = req.body

        const FindBook = await bookModel.findById(id)
        
            if(!FindBook)
            {
                return res.status(404).json({success:false,message:"No product found"})
            }
            else
            {

                const updateBook = await bookModel.findByIdAndUpdate(
                    {_id:id},
                    {bookname,description,price,author,image},
                    {new:true}
                )
                return res.status(200).json({success:true,message:"Product Updated Successfully",data:updateBook})

            }
    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"Internal server error"})

    }

})

// delete book by id

bookRoute.delete('/deleteBook/:id',async(req,res) => {
    try {
        const id = req.params.id;
      const Findbook = await bookModel.findById(id)
          if(!Findbook)
          {
              return res.status(404).json({success:false,message:"No product found"})
          }
          else
          {
             
              const deleteBook = await bookModel.findByIdAndDelete(id)
              console.log(deleteBook)
              return res.status(200).json({success:true,message:"Product Deleted Successfully",data:deleteBook})

          }
  } catch (error) {
      console.log(error)
      return res.status(500).json({success:false,message:"Internal server error"})
  }
})






module.exports = bookRoute