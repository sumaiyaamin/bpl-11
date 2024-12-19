import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar' 
import PlayerContainer from './components/PlayerContainer/PlayerContainer'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


function App() {

  const[IsActive , setIsActive] = useState({
    available : true,
    status : "available"
  })

  const[selectedPlayers, setSelectedPlayers] =useState([])

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
  const handleSelected = (player) => {

    const alreadyAdded = selectedPlayers.find((p)  => p.id == player.id);
    if(alreadyAdded){
      alert("can't add same player!" )
    }
    else{
      const newPlayer = [...selectedPlayers, player];
    setSelectedPlayers(newPlayer);
    }
    
  }
  

  return (
    <>
      
      <Navbar />
      <ToastContainer />
      
      
      <PlayerContainer handleIsActive = {handleIsActive} IsActive={IsActive} handleSelected={handleSelected}/>
      
     
      
      
    </>
  )
}

export default App
