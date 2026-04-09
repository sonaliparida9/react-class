import React from 'react'
import { useState } from 'react'

const App = () => {

  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e)=>setText(e.target.value)} />
      <p>{text}</p>
    </div>
  )
}

export default App