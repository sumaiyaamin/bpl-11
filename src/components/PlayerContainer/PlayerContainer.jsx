import './PlayerContainer.css'

const PlayerContainer = ({handleIsActive, IsActive}) => {
  return (
    <div>
      
      <div>
        <button onClick={()=>handleIsActive('available')}
        className={`${IsActive.available ?'btn active' : 'btn'}`}>Available</button>
       
       <button onClick={()=>handleIsActive('selected') }
        className={`${IsActive.available ? ' btn' : ' active btn'}`}>Selected</button>
      </div>
    </div>
  );
};

export default PlayerContainer;