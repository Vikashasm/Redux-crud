import React from 'react'
import img from "../assets/images/img.jpeg"

const Cards = ({value}) => {
  return (
    <div>
        <div className='flex flex-col gap-2 border border-black my-3 rounded-xl p-3' >
            <div className='rounded-md'>
                <img className='rounded-md' src={img} alt="random image" />
            </div>
            <div>
                <h3 className='text-3xl my-2 font-semibold' >Name: {value.first_name} {value.last_name}</h3>
                <p className='text-sm my-2' >Email: {value.email}</p>
                <p className='text-sm my-2' >Address: {value.city}</p>
                <button className='border bg-purple-300 rounded-md px-2 py-1 text-blue-800'>Delete</button>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
