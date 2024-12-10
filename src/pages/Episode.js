import React, { useState, useEffect } from "react";
import { EpisodeCard } from "../components/Cards";
import "../styles/Character.css";

export default function Character () {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(0);
  
  useEffect(() => {
    const baseURL = "https://rickandmortyapi.com/api/";
    const getPaginatePage = async () => {
      try {
        const response = await fetch(`${baseURL}episode/?page=${page + 1}`);
        const result = await response.json();
        const data = result.results;
        setEpisodes(data);
      } catch (e) {
        console.error(e);
      }
    };
    getPaginatePage();
  }, [page]);
  
  function handlePrevPage() {
    if (page <= 0) {
      setPage(0);
    } else {
      setPage((prev) => prev - 1);
    }
  }
  
  function handleNextPage() {
    if (page >= 2) {
      setPage(0);
    } else {
      setPage((prev) => prev + 1);
    } 
  }
  
  // loaded function for when data is fetched.
  const loaded = () => {
    return (
      <div className="main">
        <div className="pagination">
          <button className="btn" onClick={handlePrevPage}>
            PREV
          </button>
          <p className="my-auto">{page + 1} OF 3 </p>
          <button className="btn" onClick={handleNextPage}>
            NEXT
          </button>
        </div>
        <div className="episodes">
        {episodes.map((episode, index) => {
          return (
            <li key={index}>
              <div className="episode-list">
                <EpisodeCard key={episode.id} episode={episode} />
              </div>
            </li>
          );
        })}   
        </div>
      </div>
    );
  };
  
  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  
  // If coin has data, run the loaded function; otherwise, run loading.
  return episodes ? loaded() : loading();
}