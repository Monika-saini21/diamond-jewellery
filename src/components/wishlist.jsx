import React, { useState } from 'react'
import {useContext} from 'react'
import {UserContext} from "./context.js"
import ring from '../assets/ring.jpg'
import earring from '../assets/earring.jpg'
import necklace from '../assets/necklace.jpg'
import bracelates from '../assets/bracelates.jpg'
import { Link,  } from 'react-router-dom'

function wishlist() {
   const {wishListItem,setWishLisItem,setCartItem,cartItem}=useContext(UserContext)
  
  console.log("wishlistItem ",wishListItem)

  const [refresh,setRefresh]=useState(0);

  const quantity=1;

  function addData(product){
          if(cartItem.length > 0){
              for(let i=0;i<cartItem.length;i++){
                  if(cartItem[i].product.id===product.id){
                      cartItem[i].quantity+=quantity;
                      return true
                  }
              }
              setCartItem([...cartItem, {product,quantity}])
              setWishLisItem(wishListItem.filter(a=> a.id !== product.id))
              setRefresh(refresh+1)
          } 
          else{
              setCartItem([...cartItem, {product,quantity}]) 
              setWishLisItem(wishListItem.filter(a=> a.id !== product.id))
              setRefresh(refresh+1)
          }
      }
  
  return (
    <>
    <h1 className='ml-145 p-3 text-yellow-600 border-b-2 text-3xl w-48 border-yellow-600'>My Wishlist</h1>
    <div className='flex justify-items-start  ml-13 gap-5 flex-wrap ' >
      
       {
         wishListItem?.length>0?
           wishListItem?.map((item)=> 
           <div className=' h-106 w-75 rounded-b-lg   mb-10 mt-20'>
            <img className='h-75 w-75  object-cover   ' src={item?.image} alt="" />
            <div className=' flex flex-col items-start pt-2'>
            
            <div className=' flex flex-col items-start bg-white pt-2'>
            
            <p className=' text-yellow-600 text-xs font-serif w-58 truncate '> {item?.title}</p>
            <p className=' font-bold font-sans mb-2'>₹{item?.price}<p className='text-xs'>(MRP Inclusive of all taxes)</p></p>
            </div>
            <img className='w-9 h-9 absolute bottom-6'  onClick={()=>{
                addData(item)
        
              }} src="https://www.giva.co/cdn/shop/t/95/assets/delete-wish-item.png?v=106029573354386947881723011794" alt="" />
            <button className='  bg-zinc-900 ml-10 text-stone-50 text-lg hover:text-lg  hover:bg-yellow-600 hover:text-white
              rounded-lg cursor-pointer w-65 h-11 font-serif ' onClick={()=>{
                addData(item)
        
              }} >Move to Cart</button>
            </div>
           </div>
          )
          :<div >
          <div className='flex justify-center items-center w-310 '>
          <div>
          <p className='text-gray-700 font-bold text-3xl mr-5 mt-6'>It feels so empty in here</p>
          <p className='text-lg font-medium text-gray-600 ml-24 mt-3'>Make a wish!</p>
          <img className='w-60 mt-1 ml-9' src='https://www.giva.co/cdn/shop/t/95/assets/empty-list.png?v=152854484466048939211723011794'/>
          <Link to={'/card'}> <button className='bg-yellow-600 w-50 ml-14 mt-7 rounded-sm mb-10 p-2 shadow-lg hover:shadow-gray-400 
          ' >Start Shopping</button></Link>
  
  
  <p className='text-gray-900 font-bold text-3xl ml-7 mt-6'>Shop By Category</p></div>

 
  </div>
 <div className='flex justify-center items-center mt-10 mb-10 space-x-6'>
             <Link to='/card/rings'><img className=' w-72 h-85 cursor-pointer hover:scale-102 duration-500 ' src={ring} alt="" />  <p className='flex  relative bottom-9 left-25 text-amber-50'>Rings</p></Link> 
              <Link to='/card/necklace'><img className=' w-72 h-85 cursor-pointer hover:scale-102 duration-500 ' src={necklace} alt="" /> <p className='flex relative bottom-9 left-25 text-amber-50'>Necklaces</p></Link> 
             <Link to='/card/bracelet'><img className=' w-72 h-85 cursor-pointer hover:scale-102 duration-500 ' src="/assets/bracelates.jpg" alt="Bracelet" /> <p className='flex relative bottom-9 left-25 text-amber-50'>Bracelets</p></Link> 
              <Link to='/card/earring'><img className=' w-72 h-85 cursor-pointer hover:scale-102 duration-500 ' src={earring} alt="" /> <p className=' w-10 flex relative bottom-9 left-25 text-amber-50'>Earrings</p></Link> 
        </div>
  </div>}
</div>
</>
  )
}

export default wishlist
