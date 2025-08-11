import React from 'react'
import { Link } from 'react-router-dom';

function services() {
  return (
    <>
    
      <Link to='/' className='p-4 text-gray-600  hover:text-yellow-600'>HOME</Link><Link to='/terms-of-services' className='border-l-2 border-l-gray-600 pl-3 text-gray-600 hover:border-l-gray-600 hover:text-yellow-600'>Terms of service</Link>
     <h1 className='text-3xl  m-7 flex justify-center items-center underline'>Terms of service</h1>
     <div className='flex justify-center items-center'>
     <div className='text-gray-600 bg-stone-50 w-300 p-5 rounded-3xl'> 
     <h  className="text-xl">OVERVIEW</h>
   <br></br> 
   <br></br> 
    
     <p>This website is operated by Diamond Emporium Jewellery. Throughout the site, the terms
       “we”, “us” and “our” refer to Diamond Emporium Jewellery. Diamondsea Jewellery offers this website, including all 
       information, tools and services available from this site to you, the user,
       conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
   <br></br>
   <br></br>
       By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the
       following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and
       policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site,
       including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of
       content.
   <br></br>
   <br></br>
       
    Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of 
    the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of 
    this agreement, then you may not access the website or use any services. If these Terms of Service are considered 
    an offer, acceptance is expressly limited to these Terms of Service
   <br></br>
   <br></br>
       Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You 
       can review the most current version of the Terms of Service at any time on this page. We reserve the right to
       update, change or replace any part of these Terms of Service by posting updates and/or changes to our website.
       It is your responsibility to check this page periodically for changes. Your continued use of or access to the
       website following the posting of any changes constitutes acceptance of those changes
   <br></br>
   <br></br>
       Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our
        products and services to you


       </p>
    
    <br></br>  
       <h  className="text-xl"> ONLINE STORE TERMS</h>
     <br></br> 
     <br></br> 
       <p>
       We reserve the right to refuse service to anyone for any reason at any time.
   <br></br>
       You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
   <br></br>   
       You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.
   <br></br>  
       The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.
       </p>
     <br></br>  
       <h  className="text-xl"> MODIFICATIONS TO THE SERVICE AND PRICES</h>
     <br></br> 
     <br></br>  
     <p>
     Prices for our products are subject to change without notice.
     <br></br>
     We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
     <br></br>
     We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
     </p> 
     <br></br>
       </div>
    </div>
    <br></br>
    <br></br>
    </>
  )
}

export default services;
