import React from 'react'
import { Link } from 'react-router-dom'

function returnpolicy() {
  return (
    <>  
        <Link to='/' className='p-4 text-gray-600  hover:text-yellow-600'>HOME</Link><Link to='/returnpolicy' className='border-l-2 border-l-gray-600 pl-3 text-gray-600 hover:border-l-gray-600 hover:text-yellow-600'>Return Policy</Link>
        <h1 className='text-3xl  m-7 flex justify-center items-center underline'>Return Policy</h1>
        <div className='flex justify-center items-center '>
        <div className='text-gray-600 bg-stone-50 w-300 p-5 rounded-3xl mb-9 '>
       
          Returns

          <ul class="list-disc ml-9">
            <li>Return Policy: We offer a 30-day return policy for all unused and unworn items, no questions asked. However, please note that the 30-day return does not apply to personalised jewellery, perfumes, candles, coins, utensils, and God idols other than in cases of defective/spurious products. GIVA reserves the right to process refunds after checking the returned items. In case you have purchased a GIVA product from anywhere other than the GIVA Website, GIVA App or GIVA Exclusive Stores, the return policies of your source of purchase shall apply. Any shipping charges (if paid) at the time of placing the order are non refundable in case of returns</li>
         <li>In case of missing items in return orders, i.e., where the customer claims to have returned multiple products but actual pickup doesn't include all said items, the company has a right to deduct an amount up to the full MRP of the missing product from the refund amount. This shall extend to promotional products, including but not limited to free gifts and silver coins.</li>
         <li>Refund Policy: In case you have requested the return of any of your products, the refund of the same shall be initiated once we receive the product back in our warehouse.</li>
          <li>Replacement & Exchange: You can also avail replacement or exchange of your order as per your requirements. The conditions remain the same as those applicable to returns. The replacement will only be shipped after the initial return has been picked up or delivered (in the case of Gold items).</li>
        <li>Return Process: You can initiate a return request from our website or app. Alternatively, you can reach out to our Customer Support team, and they’ll guide you through the process. Once you have booked the return request, we request you to be available for the reverse pick-up, and we request you to answer calls from the delivery partner. In the absence of your availability or inability to answer the calls, the delivery partner may, at their discretion, cancel the reverse pick-up. In all such cases, the process will have to be re-initiated again, and the overall timeline will increase.</li>
         <li>Further, please note that while most pin codes are forward and reverse serviceable, in rare cases, some pin codes may only be forward serviceable and not reverse serviceable. In all such cases, we may request you to return the product via an alternate courier service, such as India Post and reimburse all reasonable shipping costs (up to Rs 70) incurred by you for processing such returns.</li>
          </ul>
          </div>
          </div>
          </>
        
  )
}

export default returnpolicy
