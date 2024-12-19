import Players from '../Players/Players';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';
import './PlayerContainer.css'

const PlayerContainer = ({handleIsActive, IsActive, handleSelected}) => {
  return (
    <div>
      
      <div >


        <div className='flex mt-5'>
          <h1 className='text-3xl'>Available Players</h1>
        <div>
        <button onClick={()=>handleIsActive('available')}
        className={`${IsActive.available ?'btn active' : 'btn'}`}>Available</button>
       
       <button onClick={()=>handleIsActive('selected') }
        className={`${IsActive.available ? ' btn' : ' active btn'}`}>Selected</button>
        </div>
        </div>
      </div>
      {IsActive.available? <Players handleSelected={handleSelected} /> : <SelectedPlayers />}
    </div>
  );
};

export default PlayerContainer;