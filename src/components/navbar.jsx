import { useContext, useState } from "react";
import { UserContext } from "./context.js";
import heart from "../assets/heart.jpg";
import shop from "../assets/shop.jpg";
import logo from "../assets/logo.jpg";
import login from "../assets/login.jpg";
import search from "../assets/search.jpg";
import { Link, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Navbar() {
  const { wishListItem, cartItem, searchlist, setSearchList } =
    useContext(UserContext);
  const [navhide, setNavHide] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchlist.trim() !== "") {
      navigate("/searchpage");
    }
  };

  return (
    <nav className="sticky z-40 top-0 bg-white shadow">
      <div className="flex justify-between items-center px-3 h-16">
        {/* Left Section: Hamburger + Logo */}
        <div className="flex items-center gap-10">
          {/* Hamburger (only mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenu(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 mt-2 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Hamburger icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <Link to="/">
            <img className="w-28 hover:cursor-pointer" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden md:block">
          <ul className="flex gap-x-10">
            <li className="hover:text-yellow-600">
              <Link to="/card/rings">Rings</Link>
            </li>
            <li className="hover:text-yellow-600">
              <Link to="/card/necklace">Necklaces</Link>
            </li>
            <li className="hover:text-yellow-600">
              <Link to="/card/bracelet">Bracelets</Link>
            </li>
            <li className="hover:text-yellow-600">
              <Link to="/card/earring">Earrings</Link>
            </li>
            <li className="hover:text-yellow-600">
              <Link to="/card/bangles">Bangles</Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="border-l border-l-gray-400 flex mr-5 gap-x-4 items-center">
          {/* Search */}
          {/* Phone view: always visible search bar */}
<form 
  className="flex md:hidden  " 
  onSubmit={handleSearchSubmit}
>
  <input
    className="border absolute top-16 w-full right-0.5 bg-white  pl-5  h-10"
    type="text"
    placeholder="Search..."
    value={searchlist}
    onChange={(e) => setSearchList(e.target.value)}
  />
</form>

{/* Desktop view: toggle with icon */}
<form 
  className="hidden md:flex items-center ml-2" 
  onSubmit={handleSearchSubmit}
>
  {navhide && (
    <input
      className="border rounded-sm p-1 w-40 h-8"
      type="text"
      placeholder="Search..."
      value={searchlist}
      onChange={(e) => setSearchList(e.target.value)}
    />
  )}
  <button
    type="button"
    className="ml-2"
    onClick={() => setNavHide(!navhide)}
  >
    <img className="cursor-pointer" src={search} alt="Search" />
  </button>
</form>


          {/* Wishlist */}
          <Link to="/wishlist" className="relative">
            <img className="cursor-pointer mt-1" src={heart} alt="Wishlist" />
            {wishListItem.length > 0 && (
              <span className="absolute -top-2 -right-2 text-white bg-red-600 w-5 h-5 text-xs flex items-center justify-center rounded-full">
                {wishListItem.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img className="cursor-pointer mt-1" src={shop} alt="Cart" />
            {cartItem.length > 0 && (
              <span className="absolute -top-2 -right-2 text-white bg-red-600 w-5 h-5 text-xs flex items-center justify-center rounded-full">
                {cartItem.length}
              </span>
            )}
          </Link>

          {/* Login / User */}
          <div className="flex">
            <SignedOut>
              <SignInButton mode="modal">
                <img className="cursor-pointer h-5" src={login} alt="Login" />
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-1/2 bg-gray-50 shadow-lg transform transition-transform duration-300 z-50 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4.5 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
         
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-y-4 p-4">
          <li>
            <Link to="/card/rings" onClick={() => setMobileMenu(false)}>
              Rings
            </Link>
          </li>
          <li>
            <Link to="/card/necklace" onClick={() => setMobileMenu(false)}>
              Necklaces
            </Link>
          </li>
          <li>
            <Link to="/card/bracelet" onClick={() => setMobileMenu(false)}>
              Bracelets
            </Link>
          </li>
          <li>
            <Link to="/card/earring" onClick={() => setMobileMenu(false)}>
              Earrings
            </Link>
          </li>
          <li>
            <Link to="/card/bangles" onClick={() => setMobileMenu(false)}>
              Bangles
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay (click to close) */}
      {mobileMenu && (
        <div
          className="fixed inset-0  bg-opacity-40 z-40"
          onClick={() => setMobileMenu(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
