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
      <Home />
      
      <PlayerContainer handleIsActive = {handleIsActive} IsActive={IsActive} handleSelected={handleSelected}/>
      
     
      
      
    </>
  )
}

export default App
