import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 bg-cyan-900'>
        <h2 className='text-2xl font-bold'>Sheryians</h2>
        <div className='flex gap-10'>
            <Link className='text-xl font-medium' to='/'>Home</Link>
            <Link className='text-xl font-medium' to='/about'>About</Link>
            <Link className='text-xl font-medium' to='/courses'>Courses</Link>
            <Link className='text-xl font-medium' to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar