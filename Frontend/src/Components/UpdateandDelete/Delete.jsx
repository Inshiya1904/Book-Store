import React from 'react'
import { useParams } from 'react-router-dom'

function DeleteBook() {
    const { id } = useParams();
    console.log(id)
  return (
    <div>

    </div>
  )
}

export default DeleteBook