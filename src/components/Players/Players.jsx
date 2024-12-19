import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";

const Players = ({handleSelected}) => {
  
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => {
      
        setPlayers(data);
      });
  }, []);

  return (
    <div>
      <h1>Available Players</h1>
      <div className="grid grid-cols-3 gap-3 mx-auto">
        
        {players.map((player) => (
          <Player 
            key={player.id} 
            player={player} 
            handleSelected={handleSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default Players;