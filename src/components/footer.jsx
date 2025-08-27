import React from "react";
import insta from "../assets/insta.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-stone-950 border-t-2 border-gray-200 py-10 px-6 md:px-25">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-120 gap-10">
        {/* About Us */}
        <div className="w-70">
          <h2 className="font-bold text-white text-lg mb-3">ABOUT US</h2>
          <p className="text-white text-sm font-thin">
            Diamond Emporium is a family-run company and a leading exporter of
            high-quality polished diamonds and jewellery.
          </p>
          <img className="mt-4 md:w-35 md:relative md:right-3 w-24" src={insta} alt="Instagram" />
        </div>

       <div className="flex md:gap-50 gap-18 mb-6">    
        {/* Shops */}
        <div>
          <h2 className="font-bold text-white text-lg mb-3">Shops</h2>
          <ul>
            <li className="pt-2 text-sm text-amber-50 hover:text-white cursor-pointer">
              <Link to="/card/rings">Rings</Link>
            </li>
            <li className="pt-2 text-sm text-amber-50 hover:text-white cursor-pointer">
              <Link to="/card/necklace">Necklaces</Link>
            </li>
            <li className="pt-2 text-sm text-amber-50 hover:text-white cursor-pointer">
              <Link to="/card/bracelet">Bracelets</Link>
            </li>
            <li className="pt-2 text-sm text-amber-50 hover:text-white cursor-pointer">
              <Link to="/card/earring">Earrings</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-bold text-white text-lg mb-3">Company</h2>
          <ul>
            <li className="pt-2 text-sm text-amber-50 hover:text-white cursor-pointer">FAQ</li>
            <li className="pt-2 text-sm text-amber-50 hover:text-white cursor-pointer">Testimonial</li>
            <li className="pt-2 text-sm text-amber-50 hover:text-white cursor-pointer">Contact</li>
            <li className="pt-2 text-sm text-amber-50 hover:text-white cursor-pointer">About</li>
          </ul>
        </div>

        {/* Buyer */}
        <div>
          <h2 className="font-bold text-white text-lg mb-3">Buyer</h2>
          <ul>
            <li className="pt-2 text-sm text-amber-50 hover:text-white cursor-pointer">
              <Link to="/shipping">Shipping</Link>
            </li>
            <li className="pt-2 text-sm text-amber-50 hover:text-white cursor-pointer">
              <Link to="/returnpolicy">Return</Link>
            </li>
          </ul>
        </div>
      </div>
</div>
      {/* Bottom */}
      <hr className="border-gray-600 my-6" />
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-xs font-thin">
        <p>© 2025 Diamond Emporium - All Rights Reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <Link to="/terms-of-services" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        
        </div> 
      </div>
    </footer>
  );
}

export default Footer;
