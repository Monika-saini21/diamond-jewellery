import React from 'react';
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <>  
      <div className="p-4">
        <Link 
          to="/" 
          className="text-gray-600 hover:text-yellow-600"
        >
          HOME
        </Link>
        <Link 
          to="/privacy-policy" 
          className="border-l-2 border-l-gray-600 pl-3 text-gray-600 hover:text-yellow-600"
        >
          Privacy Policy
        </Link>
      </div>

      <h1 className="text-3xl m-7 flex justify-center items-center underline">
        Privacy Policy
      </h1>

      <div className="flex justify-center items-center">
        <div className="text-gray-600 bg-stone-50 max-w-4xl p-5 rounded-3xl">
          <p>
            This Privacy Policy describes how your personal information is collected, used, 
            and shared when you visit or make a purchase from <b>www.Diomandsea.co</b> (the “Site”).
          </p>

          <h2 className="font-bold mt-5">Personal Information We Collect</h2>
          <p>
            When you visit the Site, we automatically collect certain information about your device, 
            including your web browser, IP address, time zone, and some of the cookies installed on your device. 
            We also collect details about the pages you view, what websites referred you to the Site, and 
            how you interact with it.
          </p>

          <h3 className="mt-4 font-semibold">We collect Device Information using:</h3>
          <ul className="list-disc ml-9">
            <li>
              <b>Cookies</b> — small data files placed on your device that may include an anonymous unique identifier.  
              Learn more at <a href="http://www.allaboutcookies.org" target="_blank" rel="noreferrer" className="text-yellow-600 underline">allaboutcookies.org</a>.
            </li>
            <li>
              <b>Log files</b> — track actions on the Site, collecting data like IP address, browser type, ISP, and timestamps.
            </li>
            <li>
              <b>Web beacons / tags / pixels</b> — electronic files that record information about your browsing.
            </li>
          </ul>

          <p className="mt-4">
            When making a purchase, we collect your name, billing/shipping address, payment information, email, 
            and phone number — but we do <b>not</b> store credit card details.
          </p>

          <h2 className="font-bold mt-5">Do Not Track</h2>
          <p>
            We do not alter our Site’s data collection when we receive a Do Not Track signal from your browser.
          </p>

          <h2 className="font-bold mt-5">Your Rights</h2>
          <p>
            If you are a European resident, you have the right to access, update, or delete your personal data.  
            Contact us to exercise these rights.
          </p>

          <h2 className="font-bold mt-5">Data Retention</h2>
          <p>
            We retain your order information unless you request its deletion.
          </p>
        </div>
      </div>
    </>
  );
}

export default Privacy;
