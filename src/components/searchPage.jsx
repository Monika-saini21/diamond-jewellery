import { useContext, useState } from "react"
import { UserContext } from "./context"
import Datas from "../utils/datas"
import { Link } from "react-router-dom"
import redHeart from "../assets/heart.png"

function SearchPage(){

    const {cartItem,setCartItem,cartQuantity,setCartQuantity,wishListItem,setWishLisItem,searchlist,setSearchList}=useContext(UserContext)

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

    const filter_datas=Datas.filter(data =>searchlist.length>0 ?data.title.toLowerCase().includes(searchlist.toLowerCase())  :data)
    return(
        <>
           <div className=' flex flex-col items-center cursor-pointer mt-14 mb-7'>
              <h1 className=' md:-mt-5 text-2xl border-b  font-bold text-zinc-950'>Our features Products </h1>
                <div className="flex mt-7 flex-wrap md:gap-5 gap-1 justify-center items-center bg-gray-50 md:mt-2 mb-7">
                        {filter_datas.map((data) => (
                          <div
                            key={data.id}
                            className="md:h-106 relative md:w-75 w-45 flex-col rounded-lg shadow bg-white"
                          >
                            {/* Wishlist Button */}
                            <button
                              className="absolute top-2 right-2 p-2 bg-none md:bg-white rounded-full hover:scale-110 duration-300"
                              onClick={() => setDataInWishList(data)}
                            >
                              <img
                                className="w-6"
                                src={wishlistheart(data)}
                                alt="Wishlist Icon"
                              />
                            </button>
                
                            {/* Product Image */}
                            <Link to={`/product/${data.id}`}>
                              <div className="md:h-75 md:w-75 h-45 w-45">
                                <img
                                  src={imagechange(data)}
                                  alt={data.title}
                                  className="object-cover w-full h-full transition-all duration-300 rounded-lg"
                                  onMouseEnter={() => setHoveredId(data.id)}
                                  onMouseLeave={() => setHoveredId(null)}
                                />
                              </div>
                
                              {/* Product Info */}
                              <div className="p-3 flex flex-col items-start">
                                <p className="text-yellow-600 text-xs font-serif w-38 md:w-45 truncate">
                                  {data.title}
                                </p>
                                <p className="font-bold flex flex-col gap-1 md:flex-row font-sans mb-2">
                                  ₹{data.price}
                                  <span className="text-xs relative md:top-1">
                                    (MRP Inclusive of all taxes)
                                  </span>
                                </p>
                              </div>
                            </Link>
                
                            {/* Add to Cart */}
                            <button
                              className="bg-zinc-900 text-stone-50 hover:bg-yellow-600 rounded-lg cursor-pointer w-full h-11 font-serif"
                              onClick={() => addData(data)}
                            >
                              Add to Cart
                            </button>
                          </div>
                        ))}
                      </div>
             </div>
         </>
    );
}

export default SearchPage;