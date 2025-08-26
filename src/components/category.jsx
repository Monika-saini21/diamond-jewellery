import ring from '../assets/ring.jpg';
import earring from '../assets/earring.jpg';
import necklace from '../assets/necklace.jpg';
import bracelet from '../assets/bracelates.jpg';

import { Link } from 'react-router-dom';

function Category() {
    return (
        <div className="max-w-screen px-4 md:px-25 my-20 md:my-30">
            <div className="grid grid-cols-2 gap-6 md:flex md:justify-center md:items-center md:space-x-6">
                
                <Link to={"/card/rings"} className="text-center">
                    <img className="w-full h-48 md:w-68 md:h-85 object-cover md:rounded-none rounded-lg cursor-pointer hover:scale-105 duration-500" src={ring} alt="Ring" />
                    <p className="w-10 flex relative bottom-6 md:bottom-9 left-16 h-0 md:left-25 text-amber-50">Rings</p>
                </Link>

                <Link to={"/card/necklace"} className="text-center">
                    <img className="w-full h-48 md:w-68 md:h-85 object-cover md:rounded-none rounded-lg cursor-pointer hover:scale-105 duration-500" src={necklace} alt="Necklace" />
                    <p className="w-10 flex relative bottom-6 md:bottom-9 left-11 h-0 md:left-25 text-amber-50">Necklaces</p>
                </Link>

                <Link to={"/card/bracelet"} className="text-center">
                    <img className="w-full h-48 md:w-68 md:h-85 object-cover md:rounded-none rounded-lg cursor-pointer hover:scale-105 duration-500" src={bracelet} alt="Bracelet" /> 
                    <p className="w-10 flex relative bottom-6 md:bottom-9 left-13 h-0 md:left-25 text-amber-50">Bracelets</p>
                </Link>

                <Link to={"/card/earring"} className="text-center">
                    <img className="w-full h-48 md:w-68 md:h-85 object-cover md:rounded-none rounded-lg cursor-pointer hover:scale-105 duration-500" src={earring} alt="Earring" />
                    <p className="w-10 flex relative bottom-6 md:bottom-9 left-13 h-0 md:left-25 text-amber-50">Earrings</p>
                </Link>

            </div>
        </div>
    );
}

export default Category;



<div className="max-w-screen px-4 mt-10 mb-10">
            <div className="grid grid-cols-2 gap-6 md:flex md:justify-center md:items-center md:space-x-6">
              
                    <Link to={"/card/rings"}>
                         <img className='w-68 h-85 cursor-pointer hover:scale-102 duration-500' src={ring} alt="Ring" /> 
                         <p className='flex relative bottom-9 left-25 text-amber-50'>Rings</p> </Link>
                          <Link to={"/card/necklace"}>
                         <img className='w-68 h-85 cursor-pointer hover:scale-102 duration-500' src={necklace} alt="Necklace" />
                         <p className='flex relative bottom-9 left-25 text-amber-50'>Necklaces</p>
                     </Link>
                     <Link to={"/card/bracelet"}> 
                         <img className='md:w-68 md:h-85 w-full h-48 cursor-pointer hover:scale-102 duration-500' src={bracelet} alt="Bracelet" /> 
                         <p className='"mt-2 text-sm md:text-base text-amber-50"'>Bracelets</p> </Link> 
                         <Link to={"/card/earring"}>
                         <img className='w-68 h-85 cursor-pointer hover:scale-102 duration-500' src={earring} alt="Earring" />
                         <p className='w-10 flex relative bottom-9 left-25 text-amber-50'>Earrings</p>
                     </Link>
                </div> 
                </div>