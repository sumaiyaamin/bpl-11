import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";


const Players = () => {

  const[Players, setPlayers] = useState([]);
  useEffect(()=>{
    fetch('players.json')
    .then(res => res.json())
    .then(data => setPlayers(data))
  },
    [])
  return (
    <div>
      
      <div className="grid grid-cols-3 gap-3 mx-auto">
      {
        Players.map((player) => <Player player={player}></Player>)
      }
      </div>
    </div>
  );
};

export default Players;