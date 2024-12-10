import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import "../styles/CharacterDetail.css";


const LocationResidents = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseURL = "https://rickandmortyapi.com/api/";

    const getLocationResidents = async () => {
      try {
        const response = await fetch(`${baseURL}location/${id}`);
        const data = await response.json();
        setLocation(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getLocationResidents();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
 
  return (
    <div className="location-container">
      <div className="location-detail">
        <h1>{location.name}</h1>
        <div className="location-residents">
          <h2>Location: {location.name}</h2>
          <h2>Type: {location.type}</h2>
          <h2>Dimension: {location.dimension}</h2>
          <h2>Created: {location.created}</h2>
        </div>
      </div>
      <div>
        <h2>Residents: {location.residents[0]}</h2>
      </div>
    </div>
  );
};

export default LocationResidents;
