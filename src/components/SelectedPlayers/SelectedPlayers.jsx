const SelectedPlayers = ({selectedPlayers}) => {
  const [updatedPlayers, setUpdatedPlayers] = useState ([]);

  const handleUpdated =() =>{
    
  }
  return (
    <div>
      <h1>Selected Players({selectedPlayers.length}/6)</h1>
     {
      selectedPlayers.map((p) =>(
        <div className="flex gap-5">
          <img src={p.image} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <h3>{p.name}</h3>
          </div>
          <button className="btn">delete</button>
        </div>
        

      ))
      
     }
     
    </div>
  );
};

export default SelectedPlayers;