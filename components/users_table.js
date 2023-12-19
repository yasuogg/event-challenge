// components/Table.js

import React from 'react';
import { useState , useEffect } from 'react';
export default function Table () {

  // State to store the response from the API for the GET request
  const [apiGetData, setApiGetData] = useState(null);

  // Function to handle GET request
  const fetchData = async () => {
    try {
      // API endpoint for the GET request
      const apiUrl = 'http://localhost:1337/api/event-forms';

      // Make the GET request
      const response = await fetch(apiUrl);

      // Parse the response
      const responseData = await response.json();

      // Set the response data in the state
      setApiGetData(responseData);
    } catch (error) {
      console.error('Error making GET request:', error);
    }
  };

  // Fetch data on component mount (you can use useEffect for other cases)
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <table className="w-full text-sm text-left rtl:text-right text-white">
      {/* Table header */}
      <thead className="text-xs text-gray-700 uppercase bg-[#aabcd0]">
        <tr>
          <th scope="col" className="p-4">
            Full name
          </th>
          <th scope="col" className="px-6 py-3">
          Email
          </th>
          <th scope="col" className="px-6 py-3">
          How did you hear about the event?
          </th>
          <th scope="col" className="px-6 py-3">
          Any specific interests or expectations for the event?
          </th>
        </tr>
      </thead>
      {/* Table body */}
      <tbody >
          {apiGetData.data.map((item) => (
            <tr  key={item.id}>
              <td className="px-6 py-4">{item.attributes.full_name}</td>
              <td className="px-6 py-4">{item.attributes.email}</td>
              <td className="px-6 py-4">{item.attributes.hear_about}</td>
              <td className="px-6 py-4">{item.attributes.interests}</td>
              <hr />
            </tr>
          ))}
      
     
  

      </tbody>
    </table>
  );
};
