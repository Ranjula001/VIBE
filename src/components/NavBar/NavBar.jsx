import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";


const NavBar = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 w-full md:px-44">
      <div className="md:text-3xl font-extrabold text-gray-900 dark:text-white font-roboto">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-blue-400 hover:from-red-600 hover:to-deep-purple-400 cursor-pointer">
          VIBE
        </span>
      </div>
      <div className="flex justify-center items-center mx-auto">
        <NavLinks/>
      </div>
      <div>
        <UserLinks/>
      </div>
    </div>
  );
};

export default NavBar;
