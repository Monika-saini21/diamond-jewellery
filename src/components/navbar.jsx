import { useContext, useState } from 'react';
import { UserContext } from "./context.js";
import heart from "../assets/heart.jpg";
import shop from "../assets/shop.jpg";
import logo from "../assets/logo.jpg";
import login from "../assets/login.jpg";
import search from "../assets/search.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Navbar() {
  const { wishListItem, cartItem, searchlist, setSearchList } = useContext(UserContext);
  const [navhide, setNavHide] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchlist.trim() !== "") {
      navigate("/searchpage");
    }
  };

  return (
    <nav className='sticky z-40 top-0 justify-between bg-white flex items-center px-3 h-16 shadow'>
      
      {/* Logo */}
      <div>
        <Link to="/">
          <img className='w-30 hover:cursor-pointer' src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Menu Links */}
      <div>
        <ul className='flex gap-x-10'>
          <li className='hover:text-yellow-600'><Link to="/card/rings">Rings</Link></li>
          <li className='hover:text-yellow-600'><Link to="/card/necklace">Necklaces</Link></li>
          <li className='hover:text-yellow-600'><Link to="/card/bracelet">Bracelets</Link></li>
          <li className='hover:text-yellow-600'><Link to="/card/earring">Earrings</Link></li>
          <li className='hover:text-yellow-600'><Link to="/card/bangles">Bangles</Link></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className='border-l border-l-gray-400 flex mr-5 gap-x-4 items-center'>

        {/* Search */}
        <form className='flex items-center ml-2' onSubmit={handleSearchSubmit}>
          {navhide && (
            <input
              className='border rounded-sm p-1 w-40 h-8'
              type="text"
              placeholder='Search...'
              value={searchlist}
              onChange={(e) => setSearchList(e.target.value)}
            />
          )}
          <button
            type='button'
            className='ml-2'
            onClick={() => setNavHide(!navhide)}
          >
            <img className='cursor-pointer' src={search} alt="Search" />
          </button>
        </form>

        {/* Wishlist */}
        <Link to="/wishlist" className="relative">
          <img className='cursor-pointer mt-1' src={heart} alt="Wishlist" />
          {wishListItem.length > 0 && (
            <span className='absolute -top-2 -right-2 text-white bg-red-600 w-5 h-5 text-xs flex items-center justify-center rounded-full'>
              {wishListItem.length}
            </span>
          )}
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img className='cursor-pointer mt-1' src={shop} alt="Cart" />
          {cartItem.length > 0 && (
            <span className='absolute -top-2 -right-2 text-white bg-red-600 w-5 h-5 text-xs flex items-center justify-center rounded-full'>
              {cartItem.length}
            </span>
          )}
        </Link>

        {/* Login / User */}
        <div className='flex'>
          <SignedOut>
            <SignInButton mode='modal'>
              <img className='cursor-pointer h-5' src={login} alt="Login" />
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
