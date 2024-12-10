import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Details.css";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseURL = "https://rickandmortyapi.com/api/";

    const getCharacterDetail = async () => {
      try {
        const response = await fetch(`${baseURL}character/${id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getCharacterDetail();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
 
  return (
    <div className="character-container">
      <div className="character">
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <div className="character-detail">
          <h2>Status: {character.status}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Created: {character.created}</h2>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
