import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)
// updating state correctly in object
  // const [num, setNum] = useState({user:'sonali',age:20})

// change in array
    // const [num, setNum] = useState([10, 20, 30])
 
  const btnClicked =()=>{
    // destuctaring Object
    // const newNum = {...num};
    // newNum.user ='Aman'
    // newNum.age = 23
    // setNum(newNum)

// array
    // const newNum = [...num]
    // newNum.push(99)
    // setNum(newNum)

// useing Prev (object)
    //  setNum(prev=>({...prev,age:50}))

// useing Prev (Batch update)
    // setNum(num+1) //11
    // setNum(num+1) //12
    // setNum(num+1) //13  here the num is does not increase in 3 times once

    // now useing prev
    setNum(prev=>(prev+1)) //13
    setNum(prev=>(prev+1)) //16
    setNum(prev=>(prev+1)) //19
  }


  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App