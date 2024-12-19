const Player = ({player, handleSelected}) => {
  
  const {
    image,
    name,
    country,
    role,
    battingType,
    bowlingType,
    price,
    rating,
  } = player;






  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4 bg-white mx-auto mt-5">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base">Country: {country}</p>
        <p className="text-gray-700 text-base">Role: {role}</p>
        <p className="text-gray-700 text-base">Batting Style: {battingType}</p>
        <p className="text-gray-700 text-base">Bowling Style: {bowlingType}</p>
        <p className="text-gray-700 text-base">Price: ${price}</p>
        <p className="text-gray-700 text-base">Rating: {rating} / 5</p>
      </div>
      <button onClick={()=> handleSelected(player)} className="btn">Choose Player</button>
    </div>
  );
};

export default Player;
