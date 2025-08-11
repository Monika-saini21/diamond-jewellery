import React, { useContext, useState } from 'react'
import datas from "../utils/datas.js"
import { Link, useParams } from 'react-router-dom'
import { UserContext } from './context.js'
import redHeart from "../assets/heart.png"
import ringbanner from "../assets/ringbanner.jpg"
import braclatebanner from "../assets/braclatebanner.jpg"
import nacklacebanner from "../assets/nacklacebanner.jpg"
import earringbanner from "../assets/earringbanner.jpg"


function Header(){
   
    let Category=useParams()

    const {cartItem,setCartItem,cartQuantity,setCartQuantity,wishListItem,setWishLisItem}=useContext(UserContext)

    const [quantity,setQuantity]=useState(1)

        const [isHovered, setIsHovered] = useState(false);
  

    function addData(product){
        if(cartItem.length > 0){
            for(let i=0;i<cartItem.length;i++){
                if(cartItem[i].product.id===product.id){
                    cartItem[i].quantity+=1
                    return
                }
            }
            setCartItem([...cartItem, {product,quantity}])
        } 
        else{
            setCartItem([...cartItem, {product,quantity}]) 

        }
        
    }

    function wishlistheart(data){
        for(let i=0;i<wishListItem.length;i++){
            if(wishListItem[i]?.id===data.id){
                return redHeart
            }
        }
        return "https://cdn-icons-png.flaticon.com/128/535/535285.png"
    }

    function setDataInWishList(data){
        for(let i=0;i<wishListItem.length;i++){
            if(wishListItem[i]?.id===data.id)
            {
                setWishLisItem(wishListItem.filter(item=> item.id!==data.id))
                return
            }
        }
        setWishLisItem([...wishListItem,data])
    }

    function imagechange(data){
        if(data.id===isHovered){
            return data.imge;
        }
        return data.image;
    }

    const filter_datas=datas.filter(data =>Category.id ?data.category==Category.id  :data)
    return(
         <>
             { Category.id=="rings" &&
                <div >
                   <img className='w-[100vw] h-80 ' src={ringbanner}/>
                   <p className='absolute top-37 right-120 text-gray-100 text-6xl'>RINGS</p>
                   <p className='absolute top-59 right-78 text-gray-100 text-3xl'>Timeless Sparkle for Every Occasion</p>
                </div>
             }

             { Category.id=="necklace" &&
                <div>
                     <img className='w-[100vw] h-80' src={nacklacebanner}/>
                     <p className='absolute top-37 left-70 text-gray-100 text-6xl'>NECKLACES</p>
                     <p className='absolute top-59 left-65 text-gray-100 text-3xl'>Elegance that lasts forever</p>
                </div>
             }
 
            { Category.id=="bracelet" &&
                 <div>
                     <img className='w-[100vw] h-80' src={braclatebanner}/>
                     <p className='absolute top-37 left-70 text-gray-100 text-6xl'> BRACELETS</p>
                     <p className='absolute top-59 left-65 text-gray-100 text-3xl'> A warm hug for your wrists </p>
                 </div>
             }
         
             { Category.id=="earring" &&
                 <div>
                     <img className='w-[100vw] h-80' src={earringbanner}/>
                     <p className='absolute top-37 left-70 text-gray-100 text-6xl'>EARRINGS</p>
                     <p className='absolute top-59 left-65 text-gray-100 text-3xl'>Timeless sophistication</p>
                  </div>
             }
         
            <div className=' flex flex-col items-center cursor-pointer bg-gray-50 mt-2 mb-7'>
            
                <div className=' p-5 flex gap-5 justify-center flex-wrap   '>
                
                   { filter_datas.map((data)=>
                        <div className='h-106 w-75  flex-col rounded-lg mb-9 '>
            
                            <button className=' flex relative items-center h-9 p-1.5 left-64 top-12  w-8 object-cover rounded-2xl text-3xl
                                 bg-white hover:scale-125 duration-300'
                                 onClick={()=>{
                                 setDataInWishList(data);
                                 console.log(wishListItem)
                                 }} > 
                                <img className='w-6 cursor-pointer' src={wishlistheart(data)} alt="" /> 
                            </button>

                                <Link to={`/product/${data.id}`} >

                                <div key={data.id} >
                
                                    <div  className='h-75  w-75  ' >
            
                                       <img src={imagechange(data)}
                                         alt="Product"
                                         className=" object-cover h-75  w-75 transition-all duration-300"
                                         onMouseEnter={() => setIsHovered(data.id)}
                                         onMouseLeave={() => setIsHovered(false)}
                                        /> 
                                       
                                    </div>
                                    {/* <div >
                                    <p  >★{data.rate}</p>
                                    </div> */}
                                    <div className='pl-3 flex flex-col items-start bg-white pt-2'>
            
                                         <p className=' text-yellow-600 text-xs font-serif w-58 truncate '> {data.title}</p>
                                         <p className=' font-bold font-sans mb-2'>₹{data.price}<p className='text-xs'>(MRP Inclusive of all taxes)</p></p>
                                    </div>
            
                               </div>
                                     </Link>

                                      <button className=' bg-zinc-900 text-stone-50 text-lg hover:bg-yellow-600 rounded-lg cursor-pointer  w-75 h-11 font-serif ' 
                                          onClick={()=>{
                                          setQuantity(quantity+1)
                                          ||
                                          quantity > 0 && setCartQuantity(cartQuantity+quantity) || addData(data)
                                          ||
                                          console.log("cart ",cartItem)
               
                                          }} > Add to Cart
                                       </button>
        
                        </div>
                        )
                     }
                </div>
            </div>
        
        </>
    );
}
export default Header;


