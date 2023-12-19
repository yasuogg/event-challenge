"use client";
import Logo from '@/components/logo';
import Table from '@/components/users_table';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  // State to store the response from the API for the GET request
  const [apiGetData, setApiGetData] = useState(null);

  // Function to handle GET request
  const fetchData = async () => {
    try {
      // API endpoint for the GET request
      const apiUrl = 'http://localhost:1337/api/event-forms';

      // Make the GET request
      const response = await fetch(apiUrl);

      // Check if the response is successful (status code 2xx)
      if (response.ok) {
        // Parse the response
        const responseData = await response.json();

        // Set the response data in the state
        setApiGetData(responseData);
      } else {
        console.error('Error making GET request. Status:', response.status);
      }
    } catch (error) {
      console.error('Error making GET request:', error);
    }
  };

  // Fetch data on component mount (you can use useEffect for other cases)
  useEffect(() => {
    fetchData();
  }, []);

  const items = apiGetData?.data || [];

  return (
    <>
      <div className='flex justify-between items-center pr-16'>
        <Logo />
        <button className='flex bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-9 rounded-full'>Quit</button>
      </div>
      <div className='flex space-x-[50%] justify-center items-center'>
        <button className='flex bg-[#F39C12] hover:bg-amber-500 text-white font-bold py-3 px-9 rounded-full'>send email</button>
        <button className='flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded-full'>send email</button>
      </div>
      <div className='flex justify-center items-center w-100% h-full p-10'>
        <div className='bg-[#0053B5] w-full h-full text-[#ffffff]'>
          <div>
            {/* Pass items (data) directly to the EventItem component */}
            <Table dataItem={items} />
          </div>
        </div>
      </div>
    </>
  );
}
