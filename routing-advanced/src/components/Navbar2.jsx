import React from 'react'
import { useNavigate } from "react-router-dom";


const Navbar2 = () => {

    let navigate = useNavigate();

  return (
    <div className='py-2 px-5 bg-cyan-800'>
        <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-75 ">
        Retun to Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-75 ">
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-amber-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-75 ">
        Next
      </button>
    </div>
  )
}

export default Navbar2