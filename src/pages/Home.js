import "../styles/Home.css";
import Rick_and_Morty_season_1 from "../images/Rick_and_Morty_season_1.png";
import Rick_and_Morty_season_2 from "../images/Rick_and_Morty_season_2.png";
import Rick_and_Morty_season_3 from "../images/Rick_and_Morty_season_3.png";
import Rick_and_Morty_season_4 from "../images/Rick_and_Morty_season_4.jpg";
import Rick_and_Morty_season_5 from "../images/Rick_and_Morty_season_5.jpg";
import Rick_and_Morty_season_6 from "../images/Rick_and_Morty_season_6.jpg";
import Rick_and_Morty_season_7 from "../images/Rick_and_Morty_season_7.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="season-list">
        <h1 className="title1">Rick and Morty</h1>
        <h2 className="season1">Season 1</h2>
        <img className="season-img" src={Rick_and_Morty_season_1} alt="Rick_and_Morty_season_1" /> 
      </div> 
      <div className="season-list">
        <h1 className="title2">Rick and Morty</h1>
        <h2 className="season2">Season 2</h2>
        <img className="season-img" src={Rick_and_Morty_season_2} alt="Rick_and_Morty_season_2" /> 
      </div> 
      <div className="season-list">
        <h1 className="title3">Rick and Morty</h1>
        <h2 className="season3">Season 3</h2>
        <img className="season-img" src={Rick_and_Morty_season_3} alt="Rick_and_Morty_season_3" /> 
      </div> 
      <div className="season-list">
        <h1 className="title4">Rick and Morty</h1>
        <h2 className="season4">Season 4</h2>
        <img className="season-img" src={Rick_and_Morty_season_4} alt="Rick_and_Morty_season_4" /> 
      </div> 
      <div className="season-list">
        <h1 className="title5">Rick and Morty</h1>
        <h2 className="season5">Season 5</h2>
        <img className="season-img" src={Rick_and_Morty_season_5} alt="Rick_and_Morty_season_5" /> 
      </div> 
      <div className="season-list">
        <h1 className="title6">Rick and Morty</h1>
        <h2 className="season6">Season 6</h2>
        <img className="season-img" src={Rick_and_Morty_season_6} alt="Rick_and_Morty_season_6" /> 
      </div> 
      <div className="season-list">
        <h1 className="title7">Rick and Morty</h1>
        <h2 className="season7">Season 7</h2>
        <img className="season-img" src={Rick_and_Morty_season_7} alt="Rick_and_Morty_season_7" /> 
      </div> 
    </div>
  );
}

export default Home;
