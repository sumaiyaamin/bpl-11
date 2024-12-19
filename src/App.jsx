import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar' 
import PlayerContainer from './components/PlayerContainer/PlayerContainer'
import { ToastContainer ,toast,Bounce} from 'react-toastify'
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
      toast.error('Player Already Selected!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      
    }
    else{
      
      const newPlayer = [...selectedPlayers, player];
    setSelectedPlayers(newPlayer);
    toast.info(`${player.name} added successfully`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
    }
    
  }
  

  return (
    <>
      
      <Navbar />
      <ToastContainer />
      
      
      <PlayerContainer handleIsActive = {handleIsActive} IsActive={IsActive} handleSelected={handleSelected} selectedPlayers={selectedPlayers}/>
      
     
      
      
    </>
  )
}

export default App
