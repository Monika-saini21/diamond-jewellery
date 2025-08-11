import React from "react";
import { Link } from "react-router-dom";

function OrderedPlaced() {
  return (
    <>
      {/* Step Progress */}
      <div className="flex justify-center items-center mr-14 h-20">
        <hr className="w-10 border-t-2 border-yellow-600" />
        <p className="text-8xl text-yellow-600 pb-18">.</p>
        <p className="w-17 pb-11 text-yellow-600 font-bold mt-11 pl-1 text-sm">
          checkout
        </p>

        <hr className="w-10 border-t-2 border-yellow-600" />
        <p className="text-8xl text-yellow-600 pb-18">.</p>
        <p className="w-17 text-yellow-600 font-bold pl-1 text-sm">payment</p>

        <hr className="w-10 border-t-2 border-yellow-600" />
        <p className="text-8xl text-yellow-600 pb-18">.</p>
        <p className="w-17 text-yellow-600 font-bold pl-2 text-sm">
          orderedplaced
        </p>
      </div>

      {/* Order Confirmation */}
      <div className="flex justify-center items-center mb-10">
        <div className="w-120">
          <div>
            <img
              className="w-70 ml-25 h-70"
              src="https://cdn-icons-gif.flaticon.com/13374/13374046.gif"
              alt="Order placed animation"
            />
          </div>

          <div className="ml-10 mt-6">
            <p className="text-4xl text-yellow-600 font-bold">
              Thank you for Shopping
            </p>
            <p className="ml-14 mt-2 text-2xl">Your Order is Confirmed</p>
            <p className="ml-7 mt-3">
              We'll send you a shipping confirmation email
            </p>
            <p className="ml-25">as soon as your order ships</p>

            <Link to={"/"}>
              <button className="bg-yellow-600 w-50 ml-25 mt-7 text-white font-bold rounded-sm mb-10 p-2 shadow-lg hover:shadow-gray-400">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderedPlaced;
