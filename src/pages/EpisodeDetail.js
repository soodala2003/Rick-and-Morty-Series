import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Details.css";

const EpisodeDetail = () => {
  const { id } = useParams();
  const [episode, setEpisodes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseURL = "https://rickandmortyapi.com/api/";

    const getEpisodeDetail = async () => {
      try {
        const response = await fetch(`${baseURL}episode/${id}`);
        const data = await response.json();
        setEpisodes(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getEpisodeDetail();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
 
  return (
    <div className="episode-container">
      <div className="episode">
        <h1>{episode.name}</h1>
        <div className="episode-detail">
          <h2>Air_Date: {episode.air_date}</h2>
          <h2>Episode: {episode.episode}</h2>
          <h2>Created: {episode.created}</h2>
        </div>
      </div>
        <h2>Characters: </h2>
          <ul>
            <li>{episode.characters[0]}</li>
            <li>{episode.characters[1]}</li>
            <li>{episode.characters[2]}</li>
            <li>{episode.characters[3]}</li>
            <li>{episode.characters[4]}</li>
          </ul>
      <div>

      </div>
    </div>
  );
};

export default EpisodeDetail;
