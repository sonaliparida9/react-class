
import { useState } from 'react'
import './App.css'

function App() {

  const[num, setNum] = useState(10)
  const[username, setUsername] = useState('sonali')
  const[user, setUser] = useState([10,20,30])

  function changeNum(){
    setNum(30)
    setUsername('mamali')
    setUser([40,30,50])
  }

  return (
   <div>
    <h1>Value of num is {num} <br />value of user is {username} <br />{user}</h1>
    <button onClick={changeNum}>Click</button>
   </div>
  )
}

export default App
