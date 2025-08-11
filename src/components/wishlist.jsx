import React, { useContext } from "react";
import { UserContext } from "./context.js";
import ring from "../assets/ring.jpg";
import earring from "../assets/earring.jpg";
import necklace from "../assets/necklace.jpg";
import bracelet from "../assets/bracelates.jpg";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishListItem, setWishLisItem, setCartItem, cartItem } =
    useContext(UserContext);

  const quantity = 1;

  const addData = (product) => {
    const existingIndex = cartItem.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingIndex !== -1) {
      const updatedCart = [...cartItem];
      updatedCart[existingIndex].quantity += quantity;
      setCartItem(updatedCart);
    } else {
      setCartItem([...cartItem, { product, quantity }]);
    }

    setWishLisItem(wishListItem.filter((a) => a.id !== product.id));
  };

  return (
    <>
      <h1 className="ml-145 p-3 text-yellow-600 border-b-2 text-3xl w-48 border-yellow-600">
        My Wishlist
      </h1>

      <div className="flex justify-start ml-13 gap-5 flex-wrap">
        {wishListItem?.length > 0 ? (
          wishListItem.map((item) => (
            <div
              key={item.id}
              className="h-106 w-75 rounded-b-lg mb-10 mt-20 shadow hover:shadow-lg transition"
            >
              <img
                className="h-75 w-75 object-cover"
                src={item?.image}
                alt={item?.title}
              />
              <div className="flex flex-col items-start bg-white pt-2 px-2">
                <p className="text-yellow-600 text-xs font-serif w-58 truncate">
                  {item?.title}
                </p>
                <p className="font-bold font-sans mb-2">
                  ₹{item?.price}
                  <span className="text-xs block">
                    (MRP Inclusive of all taxes)
                  </span>
                </p>

                <button
                  onClick={() => addData(item)}
                  className="bg-zinc-900 text-white text-lg hover:bg-yellow-600 rounded-lg cursor-pointer w-65 h-11 font-serif transition"
                >
                  Move to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <div className="flex flex-col justify-center items-center w-310 text-center">
              <p className="text-gray-700 font-bold text-3xl">
                It feels so empty in here
              </p>
              <p className="text-lg font-medium text-gray-600 mt-3">
                Make a wish!
              </p>
              <img
                className="w-60 mt-4"
                src="https://www.giva.co/cdn/shop/t/95/assets/empty-list.png?v=152854484466048939211723011794"
                alt="Empty wishlist"
              />
              <Link to="/card">
                <button className="bg-yellow-600 w-50 mt-7 rounded-sm mb-10 p-2 shadow-lg hover:shadow-gray-400 transition">
                  Start Shopping
                </button>
              </Link>
              <p className="text-gray-900 font-bold text-3xl mt-6">
                Shop By Category
              </p>
            </div>

            {/* Categories */}
            <div className="flex justify-center items-center mt-10 mb-10 space-x-6">
              <Link to="/card/rings">
                <img
                  className="w-70 h-85 cursor-pointer hover:scale-105 duration-500"
                  src={ring}
                  alt="Rings"
                />
                <p className="flex relative bottom-9 left-25 text-amber-50">
                  Rings
                </p>
              </Link>
              <Link to="/card/necklace">
                <img
                  className="w-70 h-85 cursor-pointer hover:scale-105 duration-500"
                  src={necklace}
                  alt="Necklaces"
                />
                <p className="flex relative bottom-9 left-25 text-amber-50">
                  Necklaces
                </p>
              </Link>
              <Link to="/card/bracelet">
                <img
                  className="w-70 h-85 cursor-pointer hover:scale-105 duration-500"
                  src={bracelet}
                  alt="Bracelets"
                />
                <p className="flex relative bottom-9 left-25 text-amber-50">
                  Bracelets
                </p>
              </Link>
              <Link to="/card/earring">
                <img
                  className="w-70 h-85 cursor-pointer hover:scale-105 duration-500"
                  src={earring}
                  alt="Earrings"
                />
                <p className="flex w-20 relative bottom-9 left-25 text-amber-50">
                  Earrings
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlist;
