// src/components/Header.jsx
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import datas from "../utils/datas.js";
import { UserContext } from "./context.js";

// Assets
import redHeart from "../assets/heart.png";
import ringbanner from "../assets/ringbanner.jpg";
import braceletbanner from "../assets/braceletbanner.jpg";
import nacklacebanner from "../assets/nacklacebanner.jpg";
import earringbanner from "../assets/earringbanner.jpg";

function Card() {
  const Category = useParams();
  const {
    cartItem,
    setCartItem,
    cartQuantity,
    setCartQuantity,
    wishListItem,
    setWishLisItem,
  } = useContext(UserContext);

  const [hoveredId, setHoveredId] = useState(null);

  // ✅ Add to Cart
  function addData(product) {
    const existingItemIndex = cartItem.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingItemIndex >= 0) {
      const updatedCart = [...cartItem];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItem(updatedCart);
    } else {
      setCartItem([...cartItem, { product, quantity: 1 }]);
    }

    setCartQuantity(cartQuantity + 1);
  }

  // ✅ Wishlist logic
  function wishlistheart(data) {
    return wishListItem.some((item) => item?.id === data.id)
      ? redHeart
      : "https://cdn-icons-png.flaticon.com/128/535/535285.png";
  }

  function setDataInWishList(data) {
    if (wishListItem.some((item) => item?.id === data.id)) {
      setWishLisItem(wishListItem.filter((item) => item.id !== data.id));
    } else {
      setWishLisItem([...wishListItem, data]);
    }
  }

  // ✅ Image hover
  function imagechange(data) {
    return data.id === hoveredId ? data.imge : data.image;
  }

  // ✅ Filter products by category
  const filter_datas = datas.filter((data) =>
    Category.id ? data.category === Category.id : data
  );


 

  return (
    <>
      {/* ✅ Banner */}
 {/* ✅ Category Banners */}
      {Category.id === "rings" && (
        <div>
        <img className="w-[100vw]  object-cover object-left h-60 md:h-80" src={ringbanner} alt="Rings" />
        <div className="absolute md:right-60 right-3 md:top-40 top-50 ">
          
          <p className=" text-gray-100 md:mb-4 text-center text-3xl md:text-6xl">
            RINGS
          </p>
          <p className=" text-gray-100 text-center text-xxl md:text-3xl">
            Timeless Sparkle for Every Occasion
          </p>
        </div>
        </div>
      )}
      {Category.id === "necklace" && (
        <div>
          <img className="w-[100vw]  h-60 md:h-80" src={nacklacebanner} alt="Necklaces" />
          <div className="absolute md:left-60 left-9 md:top-40 top-45 ">
          <p className="text-gray-100 md:mb-4  text-3xl md:text-6xl">
            NECKLACES
          </p>
          <p className=" text-gray-100 text-end md:pl-0 pl-2 text-xxl md:text-3xl">
            Elegance that lasts forever
          </p>
        </div>
        </div>
      )}
      {Category.id === "bracelet" && (
        <div>
          <img
            className="w-[100vw] object-cover h-80"
            src={braceletbanner}
            alt="Bracelets"
          />
          <p className="absolute md:top-36 top-55 left-10 md:left-48 text-3xl md:text-6xl text-gray-100 ">
            BRACELETS
          </p>
          <p className="absolute md:top-56 top-65 left-14 md:left-44 text-xxl md:text-3xl text-gray-100 ">
            A warm hug for your wrists
          </p>
        </div>
      )}
      {Category.id === "earring" && (
        <div>
          <img
            className="w-[100vw]  mt-10 h-50 md:h-80"
            src={earringbanner}
            alt="Earrings"
          />
          <div className="absolute md:left-60 left-9 md:top-40 top-40">
          <p className="text-gray-100 md:mb-4  text-3xl md:text-6xl">
            EARRINGS
          </p>
          <p className=" text-gray-100 text-end md:pl-0 pl-2 text-xxl md:text-3xl">
          
            Timeless sophistication
          </p>
        </div>
        </div>
      )}


      {/* ✅ Product Grid */}
      <div className="flex  flex-wrap md:gap-5 gap-1 justify-center items-center bg-gray-50 pt-13 pb-7">
        {filter_datas.map((data) => (
          <div
            key={data.id}
            className="md:h-106 relative md:w-75 w-45 flex-col rounded-lg shadow bg-white"
          >
            {/* Wishlist Button */}
            <button
              className="absolute top-2 right-2 p-2 bg-none md:bg-white rounded-full hover:scale-110 duration-300"
              onClick={() => setDataInWishList(data)}
            >
              <img
                className="w-6"
                src={wishlistheart(data)}
                alt="Wishlist Icon"
              />
            </button>

            {/* Product Image */}
            <Link to={`/product/${data.id}`}>
              <div className="md:h-75 md:w-75 h-45 w-45">
                <img
                  src={imagechange(data)}
                  alt={data.title}
                  className="object-cover w-full h-full transition-all duration-300 rounded-lg"
                  onMouseEnter={() => setHoveredId(data.id)}
                  onMouseLeave={() => setHoveredId(null)}
                />
              </div>

              {/* Product Info */}
              <div className="p-3 flex flex-col items-start">
                <p className="text-yellow-600 text-xs font-serif w-38 md:w-45 truncate">
                  {data.title}
                </p>
                <p className="font-bold flex flex-col gap-1 md:flex-row font-sans mb-2">
                  ₹{data.price}
                  <span className="text-xs relative md:top-1">
                    (MRP Inclusive of all taxes)
                  </span>
                </p>
              </div>
            </Link>

            {/* Add to Cart */}
            <button
              className="bg-zinc-900 text-stone-50 hover:bg-yellow-600 rounded-lg cursor-pointer w-full h-11 font-serif"
              onClick={() => addData(data)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
