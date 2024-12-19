
import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar' 
import PlayerContainer from './components/PlayerContainer/PlayerContainer'
import Players from './components/Players/Players'


function App() {

  const[IsActive , setIsActive] = useState({
    available : true,
    status : "available"
  })

  const handleIsActive = (status)=>{
    if(status === "available"){
      setIsActive({
        available: true,
        status :'available'
      })
    }
      else{
        setIsActive({
          available: false,
          status : 'selected'
        })
    }
  }
  

  return (
    <>
      
      <Navbar />
      <Home />
      <div className='flex mt-5'>
        <h1>Available Players</h1>
      <PlayerContainer handleIsActive = {handleIsActive} IsActive={IsActive} />
      </div>
      <Players />
      
    </>
  )
}

export default App
