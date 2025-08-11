import React from 'react'
import Category from './category';
import banner from '../assets/banner.jpg'
import banner2 from '../assets/banner2.jpg'
import { Link,  } from 'react-router-dom'
function Items(){
    return(<>
         <div className=' flex  justify-end  items-end' >
             <img className='w-140 h-114 m-17 ' src={banner} alt="" />
         </div>
         <div className='flex flex-col relative left-25 bottom-115 w-200 h-0 gap-5'   >
            <p className='text-4xl w-150 '>
            Exquisite Diamond Jewelry for <br></br>Every Occasion
            </p>
            <p className=' w-150'>Discover a dazzling collection of fine diamond jewelry, crafted to <br></br>
            perfection. Whether it's an engagement ring, a wedding band, or a<br></br> 
            special gift for someone you love, our expertly designed pieces reflect<br></br> 
            elegance, sophistication, and timeless beauty. Each diamond is <br></br>
            meticulously sourced and set with precision to ensure the highest<br></br> 
            quality and lasting brilliance.</p>
           <Link to={'/card'}><button class=' hover:scale-105 duration-500  cursor-pointer p-1 h-12 border-1 border-b-1 border-yellow-600 text-yellow-600 text-2xl border-x-1 w-45 relative font-serif ...' >Shop now  </button></Link> 
         </div>
         <div>
         <img className=' h-95 w-400 mt-10 ' src={banner2} alt="" />
         <p className='flex relative h-0 w-140 left-150 bottom-80 text-amber-50 text-6xl'>Be The First To Get<br></br> Limited Editions</p>
         <Link to={'/card'}><button class=' hover:scale-105 duration-500 left-180 cursor-pointer p-1 border-1 border-b-1 border-yellow-600 text-yellow-600 text-2xl border-x-1  w-45 relative bottom-30 font-serif  ...' >Shop now  </button></Link> 
         </div>
        </>





     );
 }
export default Items;

