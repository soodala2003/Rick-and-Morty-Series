import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Details.css";


const LocationDetail = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseURL = "https://rickandmortyapi.com/api/";

    const getLocationDetail = async () => {
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
    getLocationDetail();
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
        <h2>Residents: </h2>
          <ul>
            <li>{location.residents[0]}</li>
            <li>{location.residents[1]}</li>
            <li>{location.residents[2]}</li>
            <li>{location.residents[3]}</li>
            <li>{location.residents[4]}</li>
          </ul>
      </div>
    </div>
  );
};

export default LocationDetail;
