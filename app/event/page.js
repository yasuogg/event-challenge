'use client'
import Footer from "@/components/footer";
import Logo from "@/components/logo";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Event(){
 
    // State to store form data
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    hear_about: '',
    interests: '',
  });

  // State to store the response from the API
  const [apiResponse, setApiResponse] = useState(null);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API endpoint
      const apiUrl = 'http://localhost:1337/api/event-forms';

      // Data to be sent in the POST request
      const postData = {
        data: {
          full_name: formData.full_name,
          email: formData.email,
          hear_about: formData.hear_about,
          interests: formData.interests,
        },
      };

      // Make the POST request
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      // Parse the response
      const responseData = await response.json();

      // Set the response data in the state
      setApiResponse(responseData);

      // Optionally, you can reset the form after successful submission
      setFormData({
        full_name: '',
        email: '',
        hear_about: '',
        interests: '',
      });
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

    return(
        <>
        <Logo/>
        <div className='flex justify-center lg:justify-evenly '> 
    <div className='flex justify-center items-center w-50% h-50% text-gray-500'>
    <div className='flex-row text-gray justify-center items-center '>
      <div className='flex-row justify-center items-center'>
      <h1 className='text-6xl font-bold text-[#faaa1f] text-center'>Event
      <br/><p className='text-[#0053B5]'>Registration</p></h1>
        <div className='flex-col p-1'>
        
    <label className='flex p-2'>Full Name</label>
    <input  type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange} placeholder="full name" className=' duration-500	 shadow appearance-none border-2 focus:ring-blue-500 focus:border-blue-500	  w-40% text-2xl py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-[#0053B5] rounded-full'/>
    </div>
    <div className='flex-col p-1'>
    <label className='flex p-2'>Email Address</label>
    <input placeholder="email" type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange} className=' duration-500	shadow appearance-none border-2  focus:ring-blue-500 focus:border-blue-500 text-2xl w-50% py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-[#0053B5] rounded-full'/>
    </div>
    <div className='flex-col p-1'>
    <label className='flex p-2'>How did you hear about the event?</label>
    <select  type="text"
            name="hear_about"
            value={formData.hear_about}
            onChange={handleInputChange}  class=" focus:ring-blue-500 focus:border-blue-500 shadow appearance-none border-2 text-[120%] lg:text-2xl w-50% py-3 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-[#0053B5] rounded-full">
  <option>How did you hear about the event?</option>
  <option>How did you hear about the event?</option>
  <option>How did you hear about the event?</option>
  <option>How did you hear about the event?</option>
</select>
    </div>
    <div className='flex-col p-1'>
    <label className='flex p-2'>Any specific interests or expectations for the event?</label>
    <input type="text"
            name="interests"
            value={formData.interests}
            onChange={handleInputChange} placeholder="Ai,cyber security" className=' focus:ring-blue-500 focus:border-blue-500 duration-500	 shadow appearance-none border-2  text-2xl w-50% py-3 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:text-[#0053B5] rounded-full'/>
    </div>
    </div>
    <div className='flex pt-7 justify-center items-center'>
    <button type="submit" onClick={handleSubmit} className='flex text-2xl  bg-[#F39C12] duration-50 hover:bg-[#3498DB] text-white font-bold py-3 px-20 rounded-full'>Submit</button>
    </div>
    </div>
    </div>
    <Image src="/dash.png" className='hidden lg:block' width={700} height={50}/>
    </div>
        </>
    )
}