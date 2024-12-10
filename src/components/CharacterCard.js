import React from "react";
import { Link } from "react-router-dom";
import "../styles/CharacterCard.css";

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <Link to={`/character/${character.id}`}><b>{character.name}</b></Link>
    </div>
  );
}

export default CharacterCard;