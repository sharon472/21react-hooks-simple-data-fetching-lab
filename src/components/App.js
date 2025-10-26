// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null); // store image URL
  const [isLoading, setIsLoading] = useState(true); // loading state

  // Fetch dog image when component mounts
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false);
      });
  }, []);

  // Conditional rendering
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;
