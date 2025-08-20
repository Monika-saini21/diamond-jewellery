
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import "./index.css"
import { Outlet } from "react-router-dom"
import { UserContext } from "./components/context"
import { useState } from "react"



function App() {
  
   

   const [cartItem,setCartItem]=useState([])
   const [cartQuantity,setCartQuantity]=useState(0)

   const [wishListItem,setWishLisItem]=useState([])

   const [searchlist,setSearchList]=useState("")
   const [showcencel,setShowcencel] = useState(false)
 
   const [ShippingAddress,setShippingAddress]=useState({
          FirstName:"",
          LastName:"",
          Email:"",
          PhoneNumber:8360785822,
         Address:"",
         Apartment:"",
          State:"",
          City:"",
          Pincode:1144,
         
      })
const [name, setName] = useState("");
    const [review, setReview] = useState(0);
    const[rating,setRating]=useState('');
    const [submittedReview, setSubmittedReview] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
       
              const [isHovered, setIsHovered] = useState(false);
              const [activeId, setActiveId] = useState(null);
    
   const value={name,setName,cartItem,setCartItem,cartQuantity,setCartQuantity,wishListItem,setWishLisItem,searchlist,
    setSearchList,ShippingAddress,setShippingAddress , showcencel,setShowcencel,submittedReview, setSubmittedReview,review,
    rating,setRating, setReview,isHovered, setIsHovered,activeId, setActiveId,selectedImage, setSelectedImage}

  return (
    <>
    
    <UserContext.Provider value={value}>
    <Navbar  />
    <Outlet/>
    <Footer/>
    </UserContext.Provider>
    </>
  )
}

export default App;