import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Home from './Components/Pages/Home'
import Books from './Components/Pages/Books'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBooks from './Components/Pages/AddBooks';
import Footer from './Components/Footer/Footer';
import EditBook from './Components/Pages/EditBook';

function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/books'element={<Books/>} />
        <Route path='/addBooks'element={<AddBooks/>} />
        <Route path='/editBook/:id'element={<EditBook/>} />

      </Routes>
      <Footer/>
    </Router>
   
     
  
  )
}

export default App