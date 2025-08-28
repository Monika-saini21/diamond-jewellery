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

  // ✅ Render category banner dynamically
  const bannerData = {
    rings: {
      img: ringbanner,
      title: "RINGS",
      subtitle: "Timeless Sparkle for Every Occasion",
    },
    necklace: {
      img: nacklacebanner,
      title: "NECKLACES",
      subtitle: "Elegance that lasts forever",
    },
    bracelet: {
      img: braceletbanner,
      title: "BRACELETS",
      subtitle: "A warm hug for your wrists",
    },
    earring: {
      img: earringbanner,
      title: "EARRINGS",
      subtitle: "Timeless sophistication",
    },
  };

  const currentBanner = bannerData[Category.id];

  return (
    <>
      {/* ✅ Banner */}
      {currentBanner && (
        <div className="relative">
          <img
            className="w-full h-80 object-cover"
            src={currentBanner.img}
            alt={currentBanner.title}
          />
          <p className="absolute top-36 left-1/2 -translate-x-1/2 text-gray-100 text-6xl">
            {currentBanner.title}
          </p>
          <p className="absolute top-56 left-1/2 -translate-x-1/2 text-gray-100 text-3xl">
            {currentBanner.subtitle}
          </p>
        </div>
      )}

      {/* ✅ Product Grid */}
      <div className="flex mt-7 flex-wrap gap-5 justify-center items-center bg-gray-50 md:mt-2 mb-7">
        {filter_datas.map((data) => (
          <div
            key={data.id}
            className="md:h-106 relative md:w-75 w-45 flex-col rounded-lg shadow bg-white "
          >
            {/* Wishlist Button */}
           <button
  className="absolute top-2 right-2 p-2 bg-white rounded-full hover:scale-110 duration-300"
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
                <p className="text-yellow-600 text-xs font-serif truncate">
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
