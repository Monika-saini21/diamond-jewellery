import React from 'react'
import Datas from '../utils/datas.js';

import { useParams,Link } from 'react-router-dom';
import {useContext,useState} from 'react'
import {UserContext} from "./context.js"
import redHeart from "../assets/heart.png"
import Slider from "react-slick"
import"slick-carousel/slick/slick.css"
import "react-toastify/dist/ReactToastify.css";


import"slick-carousel/slick/slick-theme.css"

function Products(){
  
  let Category=useParams() 
   const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const {cartItem,setCartItem,cartQuantity,setCartQuantity,wishListItem,setWishLisItem}=useContext(UserContext)

    const [quantity,setQuantity]=useState(1)
   const [isHovered, setIsHovered] = useState(false);
    const [name, setName] = useState("");
    const[rating,setRating]=useState(0);
    const [review, setReview] = useState("");
    const [submittedReview, setSubmittedReview] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedReview({ name, review,rating });
        setName("");
        setReview("");
        setRating("");
      };

      const Star = ({ filled, onClick }) => (
        <span
          onClick={onClick}
          className={`text-2xl cursor-pointer transition ${
            filled ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          ★
        </span>
      );


    Datas
    let {id}=useParams()
    console.log(id)
    

    function addData(product){
        if(cartItem.length > 0){
            for(let i=0;i<cartItem.length;i++){
                if(cartItem[i].product.id===product.id){
                    cartItem[i].quantity+=quantity
                    return
                }
                
            }

            setCartItem([...cartItem, {product,quantity}])
        } 
        else{
            setCartItem([...cartItem, {product,quantity}]) 

        }
      
       
    }
        let product=Datas.filter(data=> data.id==id)[0]

        console.log(product)
      
      
        
        function wishlistheart(product){
                for(let i=0;i<wishListItem.length;i++){
                    if(wishListItem[i]?.id===product.id){
                        return redHeart
                    }
                }
                return "https://cdn-icons-png.flaticon.com/128/535/535285.png"
            }
        
            function setDataInWishList(product){
                for(let i=0;i<wishListItem.length;i++){
                    if(wishListItem[i]?.id===product.id)
                    {
                        setWishLisItem(wishListItem.filter(item=> item.id!==product.id))
                        return
                    }
                }
                setWishLisItem([...wishListItem,product])
            }

            function imagechange(data){
              if(data.id===isHovered){
                  return data.imge;
              }
              return data.image;
          }

            const filter_datas=Datas.filter(data =>Category.id ?data.category==Category.id  :data)
            
            const category_datas=Datas.filter(data => product.category==data.category )
            console.log(filter_datas)
    return(
        
        <div className='flex max-w-screen  mb-9'>
                   {selectedImage && (
        <div className="fixed inset-0 bg-black   bg-opacity-70 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Big view" className="max-w-full max-h-full rounded" />
        </div>
      )}

          <div className=' flex  relative md:flex-row flex-col   max-w-screen '>
          <div className='  md:w-110 max-w-screen md:1/2 md:ml-45 overflow-hidden top-13 bottom-10 md:sticky md:h-145 '>
          <Slider {...settings}>
            <div className=' mt-12 max-w-screen  md:ml-5 ml-0 '>
           <img className='h-100 max-w-screen  md:shadow-lg   shadow-none shadow-gray-400  object-cover transition-transform 
           duration-300 ease-in-out hover:scale-110' src={product.image} alt="Zoom"  onClick={() => setSelectedImage(product.image)} />
           </div>
           <div className=' mt-12 max-w-screen  md:ml-5 ml-0'>
           <img className='h-100 max-w-screen  md:shadow-lg  shadow-none  shadow-gray-400  object-cover transition-transform 
           duration-300 ease-in-out hover:scale-110' src={product.img} alt="Zoom"  onClick={() => setSelectedImage(product.img)} />
           </div>
           <div className=' mt-12 max-w-screen  md:ml-5 ml-0'>
            <img className='h-100 max-w-screen  md:shadow-lg shadow-none   shadow-gray-400  object-cover transition-transform 
           duration-300 ease-in-out hover:scale-110' src={product.imge} alt="Zoom"  onClick={() => setSelectedImage(product.imge)}/>
           </div>
           <div className=' mt-12 max-w-screen  md:ml-5 ml-0'>
            <img className='h-100 max-w-screen  md:shadow-lg  shadow-none  shadow-gray-400  object-cover transition-transform 
           duration-300 ease-in-out hover:scale-110' src={product.im} alt="Zoom"  onClick={() => setSelectedImage(product.im)} />
           </div>
           </Slider>

           <div className='flex gap-4 max-w-screen mt-7 md:ml-3 ml-5.5'>
           <img
          src={product.image}
          alt="Image 1"
          className="md:w-23 w-18  shadow-lg  shadow-gray-400  object-cover transition-transform 
           duration-300 ease-in-out hover:scale-110"
          onClick={() => setSelectedImage(product.image)}
        />
           <img
          src={product.img}
          alt="Image 2"
          className="md:w-23 w-18  shadow-lg  shadow-gray-400  object-cover transition-transform 
           duration-300 ease-in-out hover:scale-110"
          onClick={() => setSelectedImage(product.img)}
        />
            <img
          src={product.imge}
          alt="Image 1"
          className="md:w-23 w-18  shadow-lg  shadow-gray-400  object-cover transition-transform 
           duration-300 ease-in-out hover:scale-110"
          onClick={() => setSelectedImage(product.imge)}
        />
            <img
          src={product.im}
          alt="Image 1"
          className="md:w-23 w-18  shadow-lg  shadow-gray-400  object-cover transition-transform 
           duration-300 ease-in-out hover:scale-110"
          onClick={() => setSelectedImage(product.im)}
        />
           </div>
           </div>
           

           <div className=' md:ml-20 mt-11'>
            <div className='px-4'>
           <p className='text-3xl  font-san '> ₹{product.price}<p className='text-sm '>(MRP Inclusive of all taxes)</p></p>
            <p className=' text-2xl mt-3 font-serif '> {product.title}</p>
            
            <p className='pl-2 rounded-xl flex font-bold bg-green-600 text-white h-8 w-18 text-xl mt-4 font-san '> <img className='w-4 h-4 mt-2 mr-1 ml-1' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'/>{product.rate}</p>
            <div className="flex gap-2 mt-6">
                            <button className="border border-gray-400 mt-1 md:w-8 w-9 h-8 rounded-full flex justify-center items-center" 
                            onClick={()=>{
                                quantity > 0 && setQuantity(quantity-1)
                            }}>
                                -
                            </button>
                            <p className='mt-2'>
                                {quantity}
                            </p>
                            <button className="border border-gray-400 md:w-8 w-9 h-8 mt-1 rounded-full" onClick={()=>{
                                setQuantity(quantity+1)
                            }}>
                                +
                            </button>
                            <button className='border ml-3 bg-stone-900 rounded-sm hover:bg-yellow-600  text-amber-50 md:w-60 w-40 h-10 font-bold  hover:scale-105 duration-500' 
            onClick={()=>{
                quantity > 0 && setCartQuantity(cartQuantity+quantity) || addData(product)
                ||
                setQuantity(0)
                ||
                console.log("cart ",cartItem)
            }}
            
            >Add to cart</button>
             <button className=' ml-1 items-center h-10  p-1.5   w-10 object-cover rounded-sm
              text-3xl
            bg-gray-200 hover:scale-125 duration-300' onClick={()=>{
                setDataInWishList(product);
                console.log(wishListItem)
            }} > 
            <img className='w-6 cursor-pointer' src={wishlistheart(product)} alt="" /> 
            </button>
                        </div>
          <div className=' mt-11 flex  '>
           <a href='/returnpolicy'><img className='md:w-14 max-w-screen  h-12 ' src='https://www.giva.co/cdn/shop/t/156/assets/30-days-return.png?v=178021333115064889961744696667' /></a>  <p className='text-sm mt-3 mr-9'>Easy 30 Day Return</p>
           <a href='/shipping'> <img className='md:w-12 max-w-screen  h-12 md:ml-11 ' src='https://www.giva.co/cdn/shop/t/95/assets/warranty.png?v=65820393984432410941734688900'/></a><p className='text-sm mt-3  mr-9'>6-Month Warranty</p>
            </div>
        <div className='flex mt-4'>

           <a href='/shipping'>  <img className='w-12 h-12'  src='https://www.giva.co/cdn/shop/t/95/assets/plating.png?v=65384128341119599081734688896'/></a><p className='text-sm mt-3'> Lifetime Plating</p>
           </div>
            
         <div>
         { product.category=="rings" &&
         <div className='flex mt-3'>
         <p className='text-2xl mt-1 mr-3'>Ring size:</p>
         <label htmlFor="State"></label>
        <select className=" bg-gray-100  p-1 rounded-lg h-11 w-[68%]" name="State" id="" placeholder="State" >
        <option className='font-bold bg-stone-700 text-white'>Select Size</option>
  <option >3(14mm)</option>
  <option >3.5(14.4mm)</option>
  <option >4(14.8mm)</option>
  <option >4.5(15.2mm)</option>
  <option >5(15.6mm)</option>
  <option >5.5(16mm)</option>
  <option >6(16.4mm)</option>
  <option >6.5(16.9mm)</option>
  <option >7(17.3mm)</option>
  <option >7.5(17.7mm)</option>
  <option >8(18.2mm)</option>
  <option >8.5(18.6mm)</option>
  <option >9(19mm)</option>
  <option >9.5(19.4mm)</option>
  <option >10(19.8mm)</option>
  <option >10.5(20.2mm)</option>
  <option >11(20.6mm)</option>
  <option >11.5(21mm)</option>
  <option >12(21.4mm)</option>
  <option >12.5(21.8mm)</option>
  <option >13(22.2mm)</option>
  <option >13.5(22.6,,)</option>
  

  </select>
         </div>
        }
         </div>
         </div>
          <div className='px-4 max-w-screen '>
            <p className='text-2xl mt-6 font-semibold mb-3'>Product Details</p>
            <p className='md:w-116 max-w-screen  text-gray-700 '>{product.detail}</p>
            <div className='bg-gray-100 md:w-113 max-w-screen  mt-6  rounded-t-lg'>
                <p className='text-lg pt-2 ml-8 flex ' > <img className='w-6 mr-2 ml-1' src='https://cdn-icons-png.flaticon.com/128/2919/2919213.png'/>{product.description}</p>
                <div className=' flex gap-0.5  mt-2 h-23 text-sm  '>
                <div className='bg-gray-200 w-39 md:pl-5 pl-2 '> 
                    <p >Dimensions</p>
                    <p>{product.Dimensions}</p>
                    <p>{product.dimensions}</p>
                </div>
                <div className='bg-gray-200 w-39 md:pl-5 pl-2'>
                    <p>Weight</p>
                    <p>{product.weight}</p>
                </div>
                <div className='bg-gray-200 w-39 md:pl-5 pl-2'>
                    <p>Purity</p>
                    <p>{product.Purity}</p>
                </div>
                </div>
            </div>



            <div className='bg-gray-100 md:w-113 max-w-screen  mt-4 rounded-t-lg mb-6'>
                <p className='text-lg pt-2 ml-8 flex ' > <img className='w-5 h-5 mt-1 mr-2' 
               ml-1  src='https://cdn-icons-png.flaticon.com/128/18487/18487696.png'/>{product.Diamond}</p>
                <div className=' flex gap-0.5  mt-2  text-sm  '>
                <div className='bg-gray-200 h-23 w-39 pl-5 '> 
                    <p>Type</p>
                    <p>{product.Type}</p>
                  
                </div>
                <div className='bg-gray-200 w-39 md:pl-5 pl-2'>
                    <p>Setting</p>
                    <p>{product.Setting}</p>
                    <p>{product.Total}</p>
                </div>
                <div className='bg-gray-200 w-39 md:pl-5 pl-2'>
                    <p>Total Weight</p>
                    <p>{product.TotalWeight}</p>
                </div>
                </div>
                
            </div>
            <h1 className='text-2xl '>Customer Reviews</h1>
            <div className='flex gap-1  mt-4'>
            <img className='w-4 h-4 ml-1' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'/>
            <img className='w-4 h-4 ml-1' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'/>
            <img className='w-4 h-4 ml-1' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'/>
            <img className='w-4 h-4 ml-1' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'/>
            <img className='w-4 h-4 ml-1' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'/>
            </div>
            <div className='bg-gray-100 md:w-113 max-w-screen   flex justify-center p-3 mb-8 text-lg mt-5'>
            <div className=" flex max-w-screen  flex-wrap p-6">
      <h1 className="text-2xl font-semi-bold mb-4">Write a Review</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow  w-100 ">
     
      <div className="">
        <label className="block mb-1 font-medium">Name</label>
        <input
          className="w-full p-2 bg-gray-100 rounded-md"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <label className="block mb-1 font-medium">Review</label>
      <div className="mb-3 flex">
     
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              filled={star <= rating}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Review</label>
        <textarea
          className="w-full p-2 bg-gray-100 rounded-md"
          rows="2"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />
      </div>
      <button type="submit" className=" self-center ml-20 md:ml-25 mt-5 mb-2 w-[40%] mr-2 bg-yellow-600  text-white p-2  rounded-md
       hover:text-yellow-600 hover:border-2 hover:border-yellow-600 hover:scale-105 hover:bg-white  duration-300">
       submit</button>

       
      </form>
       <div className='flex flex-wrap gap-3'>
      {submittedReview && (
        
        <div className="mt-3 bg-white p-4 rounded-xl shadow-md w-40 md:w-48 ">
          <h2 className="font-semibold text-xl mb-1">{submittedReview.name}</h2>
          <p className="text-yellow-500 mb-1">
            {"★".repeat(submittedReview.rating) +
              "☆".repeat(5 - submittedReview.rating)}
          </p>
          <p className="text-gray-700">{submittedReview.review}</p>
        </div>
       
      )}
      <div className="mt-3 bg-white p-4 rounded-xl shadow-md w-40 md:w-48">
        <p className='font-semibold'>Madhu</p>
        <p className="text-yellow-500 mb-1">★★★★★</p>
        <p>Beautiful, my daughter loved it ❤️</p>
      </div>
      <div className="mt-3 bg-white p-4 rounded-xl shadow-md w-40 md:w-48">
        <p className='font-semibold'>Sairaj</p>
        <p className="text-yellow-500 mb-1">★★★★★</p>
        <p>It was amazing experience</p>
      </div>
      <div className=" mt-3 bg-white p-4 rounded-xl shadow-md w-40 md:w-48">
        <p className='font-semibold'>Kavya</p>
        <p className="text-yellow-500 mb-1">★★★★★</p>
        <p>Amazing Product!! Really liked the purchase!</p>
      </div>
      </div>
    </div>
   
            </div>
          </div>
          <h className="text-2xl ml-4 font-semi-bold "> Similar Products</h>
          <div className='bg-gray-100 md:gap-3 gap-1 md:w-113 max-w-screen mx-4 flex flex-wrap  '>
          
          { category_datas.map((data)=>
          
          <div className=' flex-col  rounded-lg md:mb-9 mb-4 '>
                     
                                     <button className=' flex relative items-center md:h-9 p-1.5 top-7 left-35 md:left-44 md:top-12 h-0 w-8 object-cover rounded-2xl text-3xl
                                          bg-white hover:scale-125 duration-300'
                                          onClick={()=>{
                                          setDataInWishList(data);
                                          console.log(wishListItem)
                                          }} > 
                                         <img className='w-6 cursor-pointer' src={wishlistheart(data)} alt="" /> 
                                     </button>
         
                                         <Link to={`/product/${data.id}`} >
         
                                         <div className='bg-amber-200 md:w-55 w-43.5' key={data.id} >
                         
                                             <div  className='h-55  md:w-55  ' >
                     
                                                <img src={imagechange(data)}
                                                  alt="Product"
                                                  className=" object-cover h-55 w-55 transition-all duration-300"
                                                  onMouseEnter={() => setIsHovered(data.id)}
                                                  onMouseLeave={() => setIsHovered(false)}
                                                 /> 
                                             </div>
         
                                             <div className=' flex flex-col items-start md:w-55 pl-3 bg-white pt-2'>
                     
                                                  <p className=' text-yellow-600 text-xs font-serif md:w-58 w-37 truncate '> {data.title}</p>
                                                  <p className=' font-bold font-sans mb-2'>₹{data.price}<p className='text-xs'>(MRP Inclusive of all taxes)</p></p>
                                             </div>
                     
                                        </div>
                                              </Link>
         
                                               <button className=' bg-zinc-900 text-stone-50 text-lg hover:bg-yellow-600 rounded-lg cursor-pointer w-43.5 md:w-55 h-9 font-serif ' 
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
            </div>  
        </div>
    );
}
export default Products;
