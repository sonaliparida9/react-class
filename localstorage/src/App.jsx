import React from 'react'

const App = () => {

  // clear all data localstorage
  // localStorage.clear()
  // sessionStorage.clear()

  // save or set data in localstorage
  //  localStorage.setItem('user','sonali')
  //  localStorage.setItem('age','18')

  // how to use this data/how to get value
  //  const user = localStorage.getItem('user')
  //  const age = localStorage.getItem('age')

  //  console.log(user,age);

  //  how to remove the items
  // localStorage.removeItem('user')

  // only stores strings(you must convert object to JSON)

   const user = {
    username:'sonali',
    age:21,
    city:'Bhubaneswar'
   }

   localStorage.setItem('user',JSON.stringify(user)) 

   const user1 = JSON.parse(localStorage.getItem('user'))

   console.log(user1)
  return (
    <div>
      App
    </div>
  )
}

export default App