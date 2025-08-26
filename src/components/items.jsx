import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../assets/banner.jpg'
import banner2 from '../assets/banner2.jpg'

function Items() {
  return (
    <>
      {/* Banner 1 */}
      <div className="w-full  flex flex-col md:flex-row-reverse justify-center px-4 md:px-25 md:justify-end">
        <img
          className="w-full md:w-[560px] md:h-[460px] object-cover"
          src={banner}
          alt="Banner"
        />
     

      {/* Text Section */}
      <div className="flex flex-col gap-5 p-5 md:pr-20 md:pt-14 max-w-3xl mx-auto text-center md:text-left">
        <p className="text-2xl md:text-4xl font-semibold">
          Exquisite Diamond Jewelry for <br /> Every Occasion
        </p>
        <p className="text-sm md:text-lg leading-relaxed">
          Discover a dazzling collection of fine diamond jewelry, crafted to
          perfection. Whether it's an engagement ring, a wedding band, or a
          special gift for someone you love, our expertly designed pieces
          reflect elegance, sophistication, and timeless beauty. Each diamond is
          meticulously sourced and set with precision to ensure the highest
          quality and lasting brilliance.
        </p>
        <Link to="/card">
          <button className="hover:scale-105 duration-500 cursor-pointer px-5 py-2 border border-yellow-600 text-yellow-600 text-lg md:text-2xl font-serif hover:bg-yellow-50 rounded">
            Shop now
          </button>
        </Link>
      </div>
    </div>
      {/* Banner 2 */}
      <div className="relative md:mt-20 mt-10">
        <img
          className="w-full h-[250px] md:h-[380px] "
          src={banner2}
          alt="Banner 2"
        />
        <div className="absolute inset-0 flex flex-col gap-1 items-center md:items-center justify-center p-5 md:p-20 text-center md:text-left">
          <p className="text-white text-2xl md:text-6xl font-bold drop-shadow-lg">
            Be The First
            </p> 
            <p className="text-white text-2xl md:text-6xl font-bold drop-shadow-lg">
             To Get  Limited Editions
          </p>
          <Link to="/card">
            <button className="md:mt-14 mt-5 hover:scale-105 duration-500 cursor-pointer px-5 py-2 border border-yellow-500 text-yellow-400 text-lg md:text-2xl font-serif hover:bg-yellow-50  rounded">
              Shop now
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Items
