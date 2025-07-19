import { Link } from "react-router-dom";
import "./Home.css";
import bearImage from "../assets/bear.png";
import CircularAnimation from "./circularAnimation";
const Home = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <CircularAnimation></CircularAnimation>
        <img src={bearImage} alt="Bear" className="Bear-img" />
      </div>
    </div>
  );
};

export default Home;
