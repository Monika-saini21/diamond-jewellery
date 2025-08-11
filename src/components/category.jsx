
import ring from '../assets/ring.jpg'
import earring from '../assets/earring.jpg'
import necklace from '../assets/necklace.jpg'
import bracelates from '../assets/bracelates.jpg'
import { Link,  } from 'react-router-dom'


function Category(){
    return(
        <div className='flex justify-center  items-center mt-19 mb-10 space-x-6'>
           <Link to={"/card/rings"}><img className=' w-68 h-85 cursor-pointer hover:scale-102 duration-500 ' src={ring} alt="" />  <p className='flex  relative bottom-9 left-25 text-amber-50'>Rings</p></Link>
            <Link  to={"/card/necklace"}><img className=' w-68 h-85 cursor-pointer hover:scale-102 duration-500 ' src={necklace} alt="" /> <p className='flex relative bottom-9 left-25 text-amber-50'>Necklaces</p></Link>
           <Link to={"/card/bracelet"}><img className=' w-68 h-85 cursor-pointer hover:scale-102 duration-500 ' src={bracelates} alt="" /> <p className='flex relative bottom-9 left-25 text-amber-50'>Bracelets</p></Link>
            <Link to={"/card/earring"}><img className=' w-68 h-85 cursor-pointer hover:scale-102 duration-500 ' src={earring} alt="" /> <p className=' w-10 flex relative bottom-9 left-25 text-amber-50'>Earrings</p></Link>
    
        </div>
    );
}
export default Category;