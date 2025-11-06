import { NavLink } from "react-router-dom";
import logo from '../../assets/logo/CP-Logo 1.svg'

const Navbar = () => {
    return (
        <div className=" flex items-center justify-between">
            <div className=" flex items-center justify-center">
               <img src={logo}></img>
            </div>
            <div className=" flex items-center justify-center space-x-4">
                 <NavLink>Home</NavLink>
                   <NavLink>Categories </NavLink>
                     <NavLink>Favorites </NavLink>
                       <NavLink>About </NavLink>
            </div>

            <div className=" flex items-center space-x-2 justify-center">
      <div className="relative">
    <input
      type="text"
      placeholder="Search recipes..."
      className="border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-48 md:w-64 transition-all duration-200"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
      />
    </svg>
  </div>

  {/* Login Button */}
  <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2 rounded-full shadow-md transition duration-200">
    Login
  </button>
            </div>
        </div>
    );
};

export default Navbar;