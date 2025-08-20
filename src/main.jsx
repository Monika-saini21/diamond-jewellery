import { createRoot } from 'react-dom/client';
import './index.css';
import Card from "./components/card.jsx";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/header.jsx';
import Products from './components/products.jsx';
import Category from './components/category.jsx';
import Items from './components/items.jsx';
import Cart from './components/cart.jsx';
import Services from './components/services.jsx';
import Privacy from './components/privacy.jsx';
import Wishlist from './components/wishlist.jsx';
import SearchPage from './components/searchPage.jsx';
import Returnpolicy from './components/returnpolicy.jsx';
import Checkout from './components/checkout.jsx';
import Payment from './components/payment.jsx';
import Shipping from './components/shipping.jsx';
import Orderedplaced from './components/orderedplaced.jsx';
import {ClerkProvider} from "@clerk/clerk-react"
import { StrictMode } from 'react';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<>
        <Header/>
        <Category/>
        <Items/>
        </>
      },
      {
        path:"Card",
        element: <Card/>
      },
      {
        path:"wishlist",
        element: <Wishlist/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"terms-of-services",
        element:<Services/>  
      },
      {
        path:"privacy-policy",
        element:<Privacy/>  
      },
      {
        path:"shipping",
        element:<Shipping/>  
      },
      {
        path:"card/:id",
        element:<Card/>
      },
      {
        path:"/product/:id",
        element:<Products/>
       
      },
      {
        path:"/searchpage",
        element:<SearchPage/>
      },
      {
        path:"/checkout",
        element:<Checkout/>
      },
      {
        path:"/returnpolicy",
        element:<Returnpolicy/>
      },
      {
        path:"/payment",
        element:<Payment/>
      },
      {
        path:"orderedplaced",
        element:<Orderedplaced/>
      }
    ]
  },

]);

createRoot(document.getElementById("root")).render(
  
    <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router}/> 
      </ClerkProvider>
    </StrictMode>
  
   
);