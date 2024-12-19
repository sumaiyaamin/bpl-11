import logo from '../../assets/logo.png'
import banner from '../../assets/banner-main.png'
import coin from '../../assets/coinIcon.png'
import {  useState } from 'react';
import { toast,Bounce } from 'react-toastify';
const Navbar = () => {

  const[coins, setCoins] = useState((600))

 const handleAddCredit =()=>{
  toast.success(`Credit added succesfully`, {
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
  setCoins(coins + 2500);
 
 }
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Fixture</a>
          
        </li>
        <li><a>Team</a></li>
      </ul>
    </div>
    <div>
      <img src={logo} alt="" />
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <a >Fixture</a>
      </li>
      <li><a>Teams</a></li>
      <li><a >Schedules</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">${coins} <img className ="w-10 h-5 " src={coin} alt="" /></a>
    
  </div>

    </div>
   <div className="hero w-11/12 mx-auto rounded-lg mmin-h-screen bg-black bg-[url('/src/assets/bg-shadow.png')]">
    <div className="hero-content text-center">
      <div className="max-w-md ">
        <div>
          <img src={banner} alt="" />
        </div>
        
        <button onClick={handleAddCredit} className="btn btn-primary bg-[#E7FE29] text-black mt-5">Claim Credit</button>
       
      </div>
    </div>
  </div>

</div>

  );
};

export default Navbar;