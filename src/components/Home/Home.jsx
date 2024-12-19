import banner from '../../assets/banner-main.png'

const Home = () => {
  return (
    <div className="hero w-11/12 mx-auto rounded-lg mmin-h-screen bg-black bg-[url('/src/assets/bg-shadow.png')]">
  <div className="hero-content text-center">
    <div className="max-w-md ">
      <div>
        <img src={banner} alt="" />
      </div>
      
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Home;