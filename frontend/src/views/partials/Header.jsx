import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiUserPlus, BiLogIn, BiMenu } from "react-icons/bi";
import { FaUser, FaPlusCircle, FaBell, FaComment, FaGripLines } from "react-icons/fa";
import { useAuthStore } from "../../store/auth";

const Header = () => {
  const [isLoggedIn, user] = useAuthStore((state) => [state.isLoggedIn, state.user]);
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log(user())
  // console.log(isLoggedIn())
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="navbar flex justify-between items-center p-4 container mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://i.postimg.cc/ZRNC1mhM/my-main-logo.png" className="w-36" alt="logo" />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex relative">
          <input
            type="text"
            placeholder="Search Articles"
            className="input input-bordered w-72 pr-10 text-white"
          />
          <BiSearch className="absolute right-3 top-3 text-gray-600 text-xl" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/category/" className="hover:text-gray-400">Category</Link>

          {/* Pages Dropdown */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer">Pages</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-800 rounded-lg w-40">
              <li><Link to="/about/" className="hover:bg-gray-700"><FaUser /> About</Link></li>
              <li><Link to="/contact/" className="hover:bg-gray-700"><FaComment /> Contact</Link></li>
            </ul>
          </div>

          {/* Dashboard Dropdown */}
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="cursor-pointer">Dashboard</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-800 rounded-lg w-48">
              <li><Link to="/dashboard/" className="hover:bg-gray-700"><FaUser /> Dashboard</Link></li>
              <li><Link to="/posts/" className="hover:bg-gray-700"><FaGripLines /> Posts</Link></li>
              <li><Link to="/add-post/" className="hover:bg-gray-700"><FaPlusCircle /> Add Post</Link></li>
              <li><Link to="/comments/" className="hover:bg-gray-700"><FaComment /> Comments</Link></li>
              <li><Link to="/notifications/" className="hover:bg-gray-700"><FaBell /> Notifications</Link></li>
              <li><Link to="/profile/" className="hover:bg-gray-700"><FaUser /> Profile</Link></li>
            </ul>
          </div>

          {/* Auth Buttons */}
          {isLoggedIn() ? (

          <>
          <Link to="/dashboard/" className="btn btn-success flex items-center">
            Dashboard <BiUserPlus className="ml-1" />
          </Link>
          <Link to="/logout/" className="btn btn-primary flex items-center">
            Logout <BiLogIn className="ml-1" />
          </Link>
          </>
          ) : (

          <>
          <Link to="/register" className="btn btn-success flex items-center">
            Register <BiUserPlus className="ml-1" />
          </Link>
          <Link to="/login" className="btn btn-primary flex items-center">
            Login <BiLogIn className="ml-1" />
          </Link>
          </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <BiMenu />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-3">
          <Link to="/" className="block hover:text-gray-400">Home</Link>
          <Link to="/category/" className="block hover:text-gray-400">Category</Link>
          <Link to="/about/" className="block hover:text-gray-400">About</Link>
          <Link to="/contact/" className="block hover:text-gray-400">Contact</Link>
          <Link to="/dashboard/" className="block hover:text-gray-400">Dashboard</Link>
          <Link to="/register" className="btn btn-success w-full">Register</Link>
          <Link to="/login" className="btn btn-primary w-full">Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
