
//useFetchPet.js
import React, { useState, useEffect } from "react";

function useFetchPet(petId) {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    window
      .fetch("/api")
      .then((res) => res.json())
      .then((pets) => {
        setPets(response.data._embedded.pets);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [petId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return { loading, pets, error };
}

export default useFetchPet;