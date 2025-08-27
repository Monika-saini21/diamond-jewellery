import React, { useContext, useState } from 'react';
import datas from "../utils/datas.js";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './context.js';
import redHeart from "../assets/heart.png";
import ringbanner from "../assets/ringbanner.jpg";
import braceletbanner from "../assets/braceletbanner.jpg"; 
import nacklacebanner from "../assets/nacklacebanner.jpg";
import earringbanner from "../assets/earringbanner.jpg";

function Header() {
    let Category = useParams();
    const { cartItem, setCartItem, cartQuantity, setCartQuantity, wishListItem, setWishLisItem } = useContext(UserContext);

    const [quantity, setQuantity] = useState(1);
    const [hoveredId, setHoveredId] = useState(null);

    function addData(product) {
        const existingItemIndex = cartItem.findIndex(item => item.product.id === product.id);
        if (existingItemIndex >= 0) {
            const updatedCart = [...cartItem];
            updatedCart[existingItemIndex].quantity += 1;
            setCartItem(updatedCart);
        } else {
            setCartItem([...cartItem, { product, quantity }]);
        }
    }

    function wishlistheart(data) {
        return wishListItem.some(item => item?.id === data.id)
            ? redHeart
            : "https://cdn-icons-png.flaticon.com/128/535/535285.png";
    }

    function setDataInWishList(data) {
        if (wishListItem.some(item => item?.id === data.id)) {
            setWishLisItem(wishListItem.filter(item => item.id !== data.id));
        } else {
            setWishLisItem([...wishListItem, data]);
        }
    }

    function imagechange(data) {
        return data.id === hoveredId ? data.imge : data.image;
    }

    const filter_datas = datas.filter(data => Category.id ? data.category === Category.id : data);

    return (
        <>
            {Category.id === "rings" && (
                <div>
                    <img className='w-[100vw] h-80' src={ringbanner} alt="Rings" />
                    <p className='absolute top-37 right-120 text-gray-100 text-6xl'>RINGS</p>
                    <p className='absolute top-59 right-78 text-gray-100 text-3xl'>Timeless Sparkle for Every Occasion</p>
                </div>
            )}

            {Category.id === "necklace" && (
                <div>
                    <img className='w-[100vw] h-80' src={nacklacebanner} alt="Necklaces" />
                    <p className='absolute top-37 md:left-70 text-gray-100 text-6xl'>NECKLACES</p>
                    <p className='absolute top-59 left-65 text-gray-100 text-3xl'>Elegance that lasts forever</p>
                </div>
            )}

            {Category.id === "bracelet" && (
                <div>
                    <img className='w-[100vw] h-80' src={braceletbanner} alt="Bracelets" /> {/* ✅ updated */}
                    <p className='absolute top-37 md:left-70 text-gray-100 text-6xl'>BRACELETS</p>
                    <p className='absolute top-59 md:left-65 text-gray-100 text-3xl'>A warm hug for your wrists</p>
                </div>
            )}

            {Category.id === "earring" && (
                <div>
                    <img className='w-[100vw] h-80' src={earringbanner} alt="Earrings" />
                    <p className='absolute top-37 md:left-70 text-gray-100 text-6xl'>EARRINGS</p>
                    <p className='absolute top-59 md:left-65 text-gray-100 text-3xl'>Timeless sophistication</p>
                </div>
            )}

            <div className='flex mt-7 flex-wrap gap-1 justify-center items-center cursor-pointer bg-gray-50 md:mt-2 mb-7'>
               
                    {filter_datas.map((data) => (
                        <div key={data.id} className='md:h-106 md:w-75 w-45  flex-col rounded-lg md:mb-9'>
                            <p
                                className='flex relative items-center h-0 md:h-9 p-1.5 left-30  md:left-64 top-7 md:top-12 w-8 object-cover rounded-2xl text-3xl bg-white hover:scale-125 duration-300'
                                onClick={() => setDataInWishList(data)}
                            >
                                <img className='w-6 cursor-pointer' src={wishlistheart(data)} alt="Wishlist Icon" />
                            </p>

                            <Link to={`/product/${data.id}`}>
                                <div className='md:h-75 md:w-75  h-45 w-45'>
                                    <img
                                        src={imagechange(data)}
                                        alt="Product"
                                        className="object-cover md:h-75 md:w-75 w-45 transition-all duration-300"
                                        onMouseEnter={() => setHoveredId(data.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                    />
                                </div>
                                <div className='pl-3 flex flex-col items-start bg-white pt-2'>
                                    <p className='text-yellow-600 text-xs font-serif md:w-58 w-36 truncate'>{data.title}</p>
                                    <p className='font-bold flex flex-col gap-0 md:gap-1 md:flex-row font-sans mb-2'>
                                        ₹{data.price}
                                        <span className='text-xs relative md:top-1'>(MRP Inclusive of all taxes)</span>
                                    </p>
                                </div>
                            </Link>

                            <button
                                className='bg-zinc-900 text-stone-50 md:text-lg text-sm hover:bg-yellow-600 rounded-lg cursor-pointer md:w-75 w-45 h-11 font-serif'
                                onClick={() => {
                                    setQuantity(quantity + 1);
                                    if (quantity > 0) {
                                        setCartQuantity(cartQuantity + quantity);
                                    }
                                    addData(data);
                                    console.log("cart ", cartItem);
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
           
        </>
    );
}

export default Header;
