import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/CP-Logo 1.svg";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../../Layout/AuthLayout/AuthLayout";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {user,logOutUser}=useContext(AuthContext);

  const handleLogOut=()=>{
    logOutUser()
    .then(result=>{
      console.log(result)
    })
    .catch(error=>{
      console.log(error.message)
    })
  }

  const categories = [
  "Desserts",
  "Drink",
  "Fast food",
  "Healthy",
  "Sea food",
  "Vegetarian"
];

  return (
    <nav className="   sticky top-0 z-50 bg-white  ">
      <div className=" px-4 py-4 md:px-8 w-11/12 mx-auto">
        <div className="flex items-center justify-between gap-2">

        {/* Logo */}
        <Link to='/' className="flex items-center">
          <img className="h-8 md:h-10 w-auto" src={logo} alt="Logo" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-4 font-semibold text-gray-700">
          <NavLink className="hover:text-emerald-600">Home</NavLink>
          <NavLink to='/recipes' className="hover:text-emerald-600">Recipes</NavLink>

          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-1 cursor-pointer hover:text-emerald-600"
            >
              Categories
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-md"
            >
               {categories.map((category) => (
                  <li key={category} className="hover:bg-emerald-300">
                    <Link to={`/category/${category}`}>{category}</Link>
                  </li>
                ))}

            </ul>
          </div>

          <NavLink to='favorites' className="hover:text-emerald-600">Favorites</NavLink>
          <NavLink to='/contact' className="hover:text-emerald-600">Contact</NavLink>
        </div>

        {/* Desktop search and login */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="relative">
               <input
              type="text"
              placeholder="Search recipes..."
              className="border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-48 md:w-64 transition-all duration-200"
            />
            <CiSearch className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          {
             user?<button  onClick={handleLogOut} className="bg-red-600 cursor-pointer  hover:bg-red-700 text-white font-medium px-5 py-2 rounded-full
              shadow-md transition duration-200">Log Out</button>
          :
          <Link to='/login'  className="bg-emerald-600 hover:bg-gray-900 text-white font-medium px-5 py-2 rounded-full shadow-md transition duration-200">
            Login
             </Link>
          }
         
           </div>

        {/* Mobile menu button */}
           <button
             onClick={() => setMenuOpen(!menuOpen)}
           className="md:hidden text-3xl text-gray-700  focus:outline-none">
          {menuOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>
             </div>

               {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 mt-3 rounded-lg p-4 space-y-3 font-semibold text-gray-700 shadow-sm">

          <NavLink className="block hover:text-emerald-600">Home</NavLink>
          <NavLink  to='/recipes' className="block hover:text-emerald-600">Recipes</NavLink>

         
          <div className="dropdown dropdown-bottom w-full">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center justify-between w-full py-2 cursor-pointer hover:text-emerald-600"
            >
              Categories
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-10 w-full p-2 shadow-md"
            >
                 {categories.map((category) => (
                  <li key={category} className="hover:bg-emerald-300">
                    <Link to={`/category/${category}`}>{category}</Link>
                  </li>
                ))}

            </ul>
          </div>

          <NavLink to='favorites' className="block hover:text-emerald-600">Favorites</NavLink>
          <NavLink to='/contact' className="block hover:text-emerald-600">Contact</NavLink>

          {/* Mobile search and login */}
          <div className="pt-3 flex flex-col gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full transition-all duration-200"
              />
              <CiSearch className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <Link to='/login' className="bg-emerald-600 hover:bg-gray-900 text-white font-medium px-5 py-2 rounded-full shadow-md transition duration-200 w-full">
              Login
            </Link>
          </div>

        </div>
      )}
      </div>
    

    
    </nav>
  );
};

export default Navbar;
