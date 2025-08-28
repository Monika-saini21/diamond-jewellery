import React from "react";
import { Link } from "react-router-dom";

function OrderedPlaced() {
  return (
    <>
      {/* Step Progress */}
       <div className='flex justify-center items-center md:mr-14 w-80 md:w-full md:mx-0 mx-4 md:mt-0 mt-8 max-w-screen h-20'>
            <hr className='w-10 text-yellow-600 '></hr>
            <p className='text-8xl text-yellow-600  pb-14 md:pb-18'>. </p>
            <p className='w-17 pb-11 font-bold mt-11 text-yellow-600   md:pl-1 text-sm'>checkout</p>
            <hr className='w-10  text-yellow-600  '></hr>
            <p className='text-8xl text-yellow-600  md:pb-18 pb-14'>. </p>
            <p className='w-17  font-bold text-yellow-600   md:pl-1 text-sm'>payment</p>
            <hr className='w-10 text-yellow-600 '></hr>
            <p className='text-8xl  pb-14 text-yellow-600  md:pb-18'>. </p>
            <p className='w-17  font-bold text-yellow-600  md:pl-2 text-sm'>orderedplaced</p>
        </div>

      {/* Order Confirmation */}
      <div className="flex justify-center items-center mb-10">
        <div className="w-120 flex flex-col justify-center items-center ">
          <div>
            <img
              className="w-70  h-70"
              src="https://cdn-icons-gif.flaticon.com/13374/13374046.gif"
              alt="Order placed animation"
            />
          </div>

          <div className=" mt-6">
            <p className="text-4xl text-center text-yellow-600 font-bold">
              Thank you for Shopping
            </p>
            <p className=" mt-2 text-center text-2xl">Your Order is Confirmed</p>
            <p className=" mt-3 text-center">
              We'll send you a shipping confirmation email
            </p>
            <p className=" text-center">as soon as your order ships</p>

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
