import React, { useContext } from "react";
import { Link } from "react-router-dom";
import plus from "../assets/plus.jpg";
import { UserContext } from "./context.js";

function Cart() {
  const { cartItem, setCartItem } = useContext(UserContext);

  // 🟢 Correct: calculate total amount
  const totalItem = cartItem?.reduce(
    (sum, item) => sum + item.quantity * item?.product.price,
    0
  );

  // 🟢 Remove item from cart
  function removeCartItem(data) {
    setCartItem((prev) =>
      prev.filter((item) => item.product.id !== data.product.id)
    );
  }

  // 🟢 Update quantity safely
  function updateQuantity(data, change) {
    setCartItem((prev) =>
      prev.map((cartItem) =>
        cartItem.product.id === data.product.id
          ? { ...cartItem, quantity: Math.max(1, cartItem.quantity + change) }
          : cartItem
      )
    );
  }

  return (
    <>
      <h1 className="md:text-4xl text-3xl text-center md:ml-140 ml-16 md:mt-10 mt-12 text-yellow-600 border-b-3 md:h-15 h-10 w-60">
        Shopping Cart
      </h1>

      <div className="flex flex-col max-w-screen items-center">
        {cartItem.length > 0 ? (
          cartItem.map(
            (item) =>
              item.quantity > 0 && (
                <div
                  key={item.product.id}
                  className="border-2 border-stone-200 max-w-screen mx-2 md:w-280 md:h-54 rounded-3xl flex md:mb-5  items-center mt-5"
                >
                  <img
                    className="md:w-47 w-25 md:pl-4"
                    src={item?.product?.image}
                    alt={item?.product?.title}
                  />

                  <div className="w-150 md:w-230 md:h-45  relative md:pl-5">
                    <p className="text-lg mt-3">{item?.product?.title}</p>

                    {/* ❌ You were resetting cartQuantity to 0 */}
                    <button onClick={() => removeCartItem(item)}>
                      <img
                        className="md:w-4 w-3 md:h-4 cursor-pointer absolute  justify-around md:right-2 right-3 top-2 md:top-0"
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png"
                        alt="Remove"
                      />
                    </button>

                    <div className="flex relative bottom-5 gap-2">
                      <p className="text-lg  font-bold">
                        ₹{item?.quantity * item?.product?.price}
                      </p>
                      <li className="flex items-center">
                        {/* Decrease */}
                        <button
                          className="mr-1"
                          onClick={() => updateQuantity(item, -1)}
                        >
                          <img
                            className="w-5 h-5 border-2 border-amber-400 p-0.5 rounded-sm"
                            src="https://cdn-icons-png.flaticon.com/128/10777/10777750.png"
                            alt="Decrease"
                          />
                        </button>

                        {/* Quantity */}
                        <p>{item?.quantity}</p>

                        {/* Increase */}
                        <button
                          className="ml-1"
                          onClick={() => updateQuantity(item, 1)}
                        >
                          <img
                            className="w-5 h-5 rounded-sm"
                            src={plus}
                            alt="Increase"
                          />
                        </button>
                      </li>
                    </div>

                    <p className="text-yellow-500 relative bottom-5 cursor-pointer">
                      Free Delivery
                    </p>
                  </div>
                </div>
              )
          )
        ) : (
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-100 mt-1"
              src="https://www.giva.co/cdn/shop/t/95/assets/empty-cart.jpg?v=2867468997513044031699807510"
              alt="Empty cart"
            />
            <div className="flex flex-col justify-center items-center">
            <p className="text-xl ">Your cart is empty.</p>
            <p className="text-xl text-yellow-600 px-3 text-center mt-2">
              Let's fill it up with some amazing jewellery!
            </p>
            <Link to={"/card"}>
              <button className="hover:scale-105 duration-500 cursor-pointer p-1 border-2 border-b-1 border-yellow-600 text-yellow-600 text-2xl w-55 mt-8  mb-5 font-serif">
                Explore Now
              </button>
            </Link>
            </div>
          </div>
        )}

        {totalItem > 0 && (
          <div className="text-lg mt-6 md:mt-0">
            <p className="text-3xl">Order Summary</p>
            <p className="ml-4">Estimated total: ₹{totalItem}</p>
            <Link to={"/checkout"}>
              <button className="bg-yellow-600 w-50 ml-1 mt-7 rounded-sm mb-10 p-2 shadow-lg hover:shadow-gray-400">
                Buy Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
