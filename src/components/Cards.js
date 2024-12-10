import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cards.css";

export const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <Link to={`/character/${character.id}`}><b>{character.name}</b></Link>
    </div>
  );
} 

export const LocationCard = ({ location }) => {
  return (
    <div className="location-card">
      <h1>{location.name}</h1>
      <h2>Type: {location.type}</h2>
      <h2>Dimension: {location.dimension}</h2>
      <Link to={`/location/${location.id}`}><b>Residents</b></Link>
      {/* <h2>Residents: {location.residents[0]}</h2>  */}
    </div>
  );
} 

export const EpisodeCard = ({ episode }) => {
  return (
    <div className="episode-card">
      <h1>{episode.name}</h1>
      <h2>Air_Date: {episode.type}</h2>
      <h2>Episode: {episode.episode}</h2>
      <h2>Characters: {/* {location.residents[0]} */}</h2>
    </div>
  );
} 

export default CharacterCard;