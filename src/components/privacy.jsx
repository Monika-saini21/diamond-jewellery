import React from 'react'
import { Link } from 'react-router-dom';

function privacy() {
  return (
    <>  
        <Link to='/' className='p-4 text-gray-600  hover:text-yellow-600'>HOME</Link><Link to='/privacy-policy' className='border-l-2 border-l-gray-600 pl-3 text-gray-600 hover:border-l-gray-600 hover:text-yellow-600'>Privact Policy</Link>
        <h1 className='text-3xl  m-7 flex justify-center items-center underline'>Privact Policy</h1>
        <div className='flex justify-center items-center '>
        <div className='text-gray-600 bg-stone-50 w-300 p-5 rounded-3xl '>
        <p><br></br>
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make 
        a purchase from www.Diomandsea.co (the “Site”).
        <br></br><br></br>
       <p className='font-bold'> PERSONAL INFORMATION WE COLLECT </p>
        When you visit the Site, we automatically collect certain information about your device, including information 
        about your web browser, IP address, time zone, and some of the cookies that are installed on your device. 
        Additionally, as you browse the Site, we collect information about the individual web pages or products that
        you view, what websites or search terms referred you to the Site, and information about how you interact with 
        the Site. We refer to this automatically-collected information as “Device Information”.
        <br></br>
        We collect Device Information using the following technologies: 
        <br></br>
        <ul class="list-disc ml-9">
            <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique
                 identifier. For more information about cookies, and how to disable cookies, visit 
                 http://www.allaboutcookies.org.</li>
             <li>“Log files” track actions occurring on the Site, and collect data including your IP address, browser 
                type, Internet service provider, referring/exit pages, and date/time stamps</li>  
                <li>“Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the 
                    Site.</li>  
                    </ul>
                    <br></br>
                    Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain
                     information from you, including your name, billing address, shipping address, payment information (including
                      credit card numbers), email address, and phone number. But we do not store your credit card and other payment 
                      details with us. We refer to this information as “Order Information”.
                      <br></br><br></br>
                      <p className='font-bold'> DO NOT TRACK</p> 
                   Please note that we do not alter our Site data collection and use standard practices when we see a Do 
                   Not Track signal from your browser.
                   <br></br><br></br>
                   <p className='font-bold'> YOUR RIGHTS </p>
               If you are a European resident, you have the right to access personal information we hold about you and to
                ask that your personal information be corrected, updated, or deleted. If you would like to exercise this 
                right, please contact us through the contact information below.
                 <br></br><br></br>
               Additionally, if you are a European resident we note that we are processing your information in order to 
               fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise
                to pursue our legitimate business interests listed above. Additionally, please note that your information
                 will be transferred outside of Europe, including to Canada and the United States.
                <br></br><br></br>
               <p className='font-bold'> DATA RETENTION</p> 
               When you place an order through the Site, we will maintain your Order Information for our records unless 
               and until you ask us to delete this information.
            <br></br><br></br>

        
        </p>
        </div>
        </div>
        <br></br>
        <br></br>
    </>
  )
}

export default privacy;
