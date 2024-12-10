import "../styles/Home.css";
import Rick_and_Morty_season_1 from "../images/Rick_and_Morty_season_1.png";

const Home = () => {
  return (
    <div className="home">
      <div className="season-list">
        <h1 className="title">Rick and Morty</h1>
        <h2 className="season">Season 1</h2>
        <img className="season-1-img" src={Rick_and_Morty_season_1} alt="Rick_and_Morty_season_1" />
      </div> 
    </div>
  );
}

export default Home;
