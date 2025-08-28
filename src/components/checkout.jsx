import React, { useContext, useState } from 'react'
import { UserContext } from './context'
import { useNavigate } from 'react-router-dom'

function checkout() {
   const{ShippingAddress,setShippingAddress}=useContext(UserContext)
    const navigate=useNavigate()
  return (
    <div>
         <div className='flex justify-center items-center md:mr-14 w-80 md:w-full mx-4 md:mx-0 md:mt-0 mt-8 max-w-screen h-20'>
            <hr className='w-10 text-yellow-600 '></hr>
            <p className='text-8xl text-yellow-600  pb-14 md:pb-18'>. </p>
            <p className='w-17 pb-11 font-bold mt-11 text-yellow-600   md:pl-1 text-sm'>checkout</p>
            <hr className='w-10   '></hr>
            <p className='text-8xl  md:pb-18 pb-14'>. </p>
            <p className='w-17  font-bold   md:pl-1 text-sm'>payment</p>
            <hr className='w-10 '></hr>
            <p className='text-8xl  pb-14 md:pb-18'>. </p>
            <p className='w-17  font-bold md:pl-2 text-sm'>orderedplaced</p>
        </div>
            <div className="flex flex-col items-center mt-5">

<p className="text-2xl text-yellow-600 font-bold font mb-5 ">Delivery Address</p>
<form className=" shadow-lg shadow-gray-400 flex  flex-col p-5 gap-2 rounded-lg mb-5 m-4 md:w-[60vw] " onSubmit={(e)=>{
    e.preventDefault()
    navigate("/payment")
    
    }} >
        <div className='flex mb-3'>
    <label htmlFor="Full Name"></label>
    <input className=" bg-gray-100 p-1 ml-2 mr-1 rounded-lg h-11  w-[50%]" type="text" name="First Name" placeholder='First Name' value={ShippingAddress.firstName} required onChange={(e)=>{
        setShippingAddress({...ShippingAddress, FirstName:e.target.value})
    }}/>
     <label htmlFor="Last Name"></label>
    <input className=" bg-gray-100 ml-4 p-1 rounded-lg h-11  w-[50%]" type="text" name="Last Name" placeholder='Last Name' value={ShippingAddress.LartName} required onChange={(e)=>{
        setShippingAddress({...ShippingAddress, LastName:e.target.value})
    }}/></div>

<div className="flex   mb-5">
        <label htmlFor="FullName"></label>
        <input className=" bg-gray-100 ml-2   p-1 rounded-lg h-11 w-[50%] mr-5 " type="email" name="Email" placeholder='Email' required value={ShippingAddress.Email} onChange={(e)=>{
        setShippingAddress({...ShippingAddress, Email:e.target.value})
        }}/>
        <label htmlFor="FullName"></label>
        <input className=" bg-gray-100  p-1 rounded-lg h-11 w-[50%] " type="number" name="PhoneNumber" placeholder='PhoneNumber' required value={ShippingAddress.PhoneNumber} onChange={(e)=>{
        setShippingAddress({...ShippingAddress, PhoneNumber:e.target.value})
        }}/>
    </div>


    <p className="text-2xl mb-5 self-center mt-5">Shipping Address</p>
    <label htmlFor="StreetAddress"> </label>
    <input className=" bg-gray-100 ml-2 mr-2 p-1 rounded-lg h-11" type="text" name="StreetAddress" placeholder='Address' value={ShippingAddress.StreetAddress} required onChange={(e)=>{
        setShippingAddress({...ShippingAddress, StreetAddress:e.target.value})
    }}/>
    <label htmlFor="Floor"> </label>
    <input className=" bg-gray-100 ml-2 mr-2 mb-3 p-1 rounded-lg h-11" type="text" name="Floor" placeholder='Apartment,suite,etc(optional)' value={ShippingAddress.floor} onChange={(e)=>{
        setShippingAddress({...ShippingAddress, Floor:e.target.value})
    }}/>

    <div className="flex gap-2  justify-evenly">
    <label htmlFor="City"></label>
        <input className=" bg-gray-100  p-1  rounded-lg h-11 w-[47%]" type="text" name="City" placeholder='City' value={ShippingAddress.City} onChange={(e)=>{
        setShippingAddress({...ShippingAddress, City:e.target.value})
        }} required />

        <label htmlFor="State"></label>
        {/* <input className=" bg-gray-100  p-1 rounded-lg h-11 w-[30%]" type="text" name="State" placeholder='State' required value={ShippingAddress.State} onChange={(e)=>{
        setShippingAddress({...ShippingAddress, State:e.target.value})
        }}/> */}<select className=" bg-gray-100  p-1 rounded-lg h-11 w-[44%]" name="State" id="" placeholder="State" onChange={(e)=>{
        setShippingAddress({...ShippingAddress, State:e.target.value})
        }}>
            <option >State</option>
  <option >Andhra Pradesh</option>
  <option >Arunachal Pradesh</option>
  <option >Assam</option>
  <option >Bihar</option>
  <option >Chhattisgarh</option>
  <option >Goa</option>
  <option >Gujarat</option>
  <option >Haryana</option>
  <option >Himachal Pradesh</option>
  <option >Jharkhand</option>
  <option >Karnataka</option>
  <option >Kerala</option>
  <option >Madhya Pradesh</option>
  <option >Maharashtra</option>
  <option >Manipur</option>
  <option >Meghalaya</option>
  <option >Nagaland</option>
  <option >Punjab</option>
  <option >Rajasthan</option>
  <option >Sikkim</option>
  <option >Tamil Nadu</option>
  <option >Uttar Pradesh</option>
  <option >Uttarakhand</option>
  <option >West Bengal</option>
  
</select>
       
        <label htmlFor="Pincode"></label>
        <input className=" bg-gray-100  p-1 mr-2 rounded-lg h-11 w-[44%]" type="number" name="PIN code" placeholder='PIN code' required value={ShippingAddress.Pincode} onChange={(e)=>{
        setShippingAddress({...ShippingAddress, Pincode:e.target.value})
        }}/>
    </div>

    

  

    <button type="submit" className=" self-center mt-5 mb-2 md:w-[40%] mr-2 bg-yellow-600  text-white p-2  rounded-md hover:text-yellow-600 hover:border-2 hover:border-yellow-600 hover:scale-105 hover:bg-white  duration-300">Proceed To Saving and Payment</button>

</form>
</div> 
    </div>
  )
}

export default checkout
