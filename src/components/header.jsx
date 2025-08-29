import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import header from '../assets/header.jpg';
import headera from '../assets/headera.jpg';
import header1 from '../assets/header1.jpg';
import { Link } from 'react-router-dom';

function Header() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="w-full mt-5 md:mt-0 overflow-hidden"> 
            <Slider
                {...settings}
                className="w-full overflow-hidden"  // <-- force full width
            >
                {/* Slide 1 */}
                <div className="relative md:top-0 top-5 w-full">
                    <img
                        className="w-full h-[40vh]  md:h-[80vh]  object-cover object-right"
                        src={header}
                        alt="Header"
                    />
                    <div className='absolute bottom-24 left-4  w-50 md:w-140 flex flex-col md:gap-4  text-white 
                            md:bottom-20 md:left-25 '>
                    <p className='md:text-5xl  text-md'>You deserve the most </p>
                    <hr className= 'absolute md:w-20 top-7  right-4 text-yellow-600'></hr>
                    <p className='text-2xl md:text-7xl'>Unique Jewellery</p>
                    <p className='text-xs md:text-lg'>As human beings, we're very materialistic and have all this 
                        stuff - furs and cars and diamonds and money</p>
                    <Link to="/card">
                        <button className=" 
                             md:translate-x-0 md:mt-10 mt-3
                            px-4 md:py-2 py-1 border border-yellow-600 text-yellow-600 
                            text-sm md:text-2xl  hover:bg-yellow-100 
                            hover:scale-105 duration-300 rounded">
                            Shop now
                        </button>
                    </Link>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="relative md:top-0 top-5 w-full">
                    <img
                        className="w-full h-[40vh]  md:h-[80vh]  object-cover object-right"
                        src={header1}
                        alt="Combined"
                    />
                    <div className='absolute bottom-26 left-4  w-40 md:w-140 flex flex-col md:gap-4  text-white 
                            md:bottom-30 md:left-25 '>
                    <p className='text-2xl md:text-7xl'>New arrivel </p>
                  
                    <p className=' md:text-5xl  text-md'>Bringing the best in You</p>
               
                    <Link to="/card">
                        <button className=" md:translate-x-0 md:mt-10 mt-7
                            px-4 md:py-2 py-1 border border-yellow-600 text-yellow-600 
                            text-sm md:text-2xl  hover:bg-yellow-100 
                            hover:scale-105 duration-300 rounded">
                            Shop now
                        </button>
                    </Link>
                </div>
                </div>

                {/* Slide 3 */}
                <div className="relative md:top-0 top-5 w-full">
                    <img
                        className="w-full h-[40vh]  md:h-[80vh]  object-cover "
                        src={headera}
                        alt="Header A"
                    />
                    <Link to="/card">
                        <button className="absolute bottom-10 left-55 -translate-x-1/2 
                            md:bottom-20 md:left-[45%] md:translate-x-0
                            px-4 py-2 border border-yellow-600 text-yellow-600 
                            text-lg md:text-2xl font-serif  hover:bg-yellow-100 
                            hover:scale-105 duration-300 rounded">
                            Shop now
                        </button>
                    </Link>
                </div>
            </Slider>
        </div>
    );
}

export default Header;
