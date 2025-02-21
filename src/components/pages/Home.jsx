import LeftSideBar from "../LeftSideBar/LeftSideBar";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div className="w-full">
      <div className="fixed top-0 z-10 w-full bg-white">
        <NavBar />
      </div>
      <div className="flex bg-blue-gray-100">
        <div className="flex-auto w-[20%] fixed top-12">
        <LeftSideBar/>
        </div>
      </div>
    </div>
  );
};

export default Home;
