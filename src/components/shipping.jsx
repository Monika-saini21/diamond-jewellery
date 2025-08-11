import React from 'react'
import { Link } from 'react-router-dom'

function shipping() {
  return (
    <>  
    <Link to='/' className='p-4 text-gray-600  hover:text-yellow-600'>HOME</Link><Link to='/returnpolicy' className='border-l-2 border-l-gray-600 pl-3 text-gray-600 hover:border-l-gray-600 hover:text-yellow-600'>Shipping Policy</Link>
    <h1 className='text-3xl  m-7 flex justify-center items-center underline'>Shipping Policy</h1>
    <div className='flex justify-center items-center '>
    <div className='text-gray-600 bg-stone-50 w-300 p-5 rounded-3xl mb-9 '>
    Shipping:
        <ul class="list-disc ml-9">
        <li>Shipping Time: Orders are usually processed and shipped within 48 hours. Please note personalised items will take longer to process. If your order has both personalised and non-personalised items, the order will be split, and the non-personalised items will be delivered beforehand.</li>
        <li>Shipping Charges: We offer free shipping on all orders over Rs. 449. Please note that we do not offer free shipping on international orders and returns.</li>
         <li>Tracking: You will receive tracking details over WhatsApp, email and SMS, once the order is shipped.</li>
         <li>In case you’re ordering other items along with personalised or Gold jewellery, your order might arrive in parts.</li>
          </ul>
        
          <br></br>
          <p>We offer FREE shipping on every order only within India. Your order will be shipped to you fully insured. We urge all customers to inspect the package for any damage or tamper before receiving or signing for receipt.
          </p>
          <br></br>
          <br></br>
          <p>For our Indian customers, after your item has been packaged, it will be shipped and delivered free via one of the following carriers.
          </p>
          <br></br>
          <br></br>
          <p>For our International customers, after your item has been packaged, it will be shipped and delivered via the following carrier.</p>
        </div>
        </div>
        </>
  )
}

export default shipping
