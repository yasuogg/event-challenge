'use client'

import { useState, useEffect } from 'react';

export default function Event() {
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
    <div>
      {/* Display the API response for the GET request */}
      {apiGetData && (
        <div>
          {apiGetData.data.map((item) => (
            <div key={item.id}>
              <h1>Full Name: {item.attributes.full_name}</h1>
              <h1>Email: {item.attributes.email}</h1>
              <h1>Hear About: {item.attributes.hear_about}</h1>
              <h1>Interests: {item.attributes.interests}</h1>
              <hr /> {/* Optional separator between items */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

