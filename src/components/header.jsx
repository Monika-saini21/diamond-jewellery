import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import header from '../assets/header.jpg';
import headera from '../assets/headera.jpg';
import combined from '../assets/combined.jpg';
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
                <div className="relative w-full">
                    <img
                        className="w-full h-[50vh] md:h-[70vh] object-cover"
                        src={header}
                        alt="Header"
                    />
                    <Link to="/card">
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 
                            md:bottom-16 md:left-12 md:translate-x-0
                            px-4 py-2 border border-yellow-600 text-yellow-600 
                            text-lg md:text-2xl font-serif bg-white/70 hover:bg-yellow-100 
                            hover:scale-105 duration-300 rounded">
                            Shop now
                        </button>
                    </Link>
                </div>

                {/* Slide 2 */}
                <div className="relative w-full">
                    <img
                        className="w-full h-[50vh] md:h-[70vh] object-cover"
                        src={combined}
                        alt="Combined"
                    />
                    <Link to="/card">
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 
                            md:bottom-24 md:left-20 md:translate-x-0
                            px-4 py-2 border border-yellow-600 text-yellow-600 
                            text-lg md:text-2xl font-serif  hover:bg-yellow-100 
                            hover:scale-105 duration-300 rounded">
                            Shop now
                        </button>
                    </Link>
                </div>

                {/* Slide 3 */}
                <div className="relative w-full">
                    <img
                        className="w-full h-[50vh] md:h-[70vh] object-cover"
                        src={headera}
                        alt="Header A"
                    />
                    <Link to="/card">
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 
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
