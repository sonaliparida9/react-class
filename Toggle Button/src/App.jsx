import React from 'react'
import { useState } from 'react'

const App = () => {

  const [isOn, setIsOn] = useState(false)

  return (
    <div 
    style={{
      height: '100vh',
      backgroundColor: isOn ? 'black' : 'white',
      color: isOn ? 'black' : 'white',
      display:"flex",
      justifyContent:"center",
      alignItems: "center",
    }}>
      <button onClick={()=>setIsOn(!isOn)}>{isOn ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default App