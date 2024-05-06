// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        setIsLoading(true); // Set loading state to true
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImageUrl(data.message); // Set dog image URL in state
        setIsLoading(false); // Set loading state to false after image is fetched
      } catch (error) {
        console.error('Error fetching dog image:', error);
        setIsLoading(false); // Set loading state to false in case of error
      }
    };

    fetchDogImage(); // Call fetchDogImage function when component mounts


  }, []); // Empty dependency array to run effect only once when component mounts

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" style={{ maxWidth: '100%' }} />
      )}
    </div>
  );
};

export default App;