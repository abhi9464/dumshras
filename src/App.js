import "./styles.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  let Movie = [
    "Don",
    "Dhoom",
    "De Dana Dan",
    "Murder",
    "Krrish",
    "A Flying Jatt",
    "Great Grand Masti",
    "Sholay",
    "Dabangg",
    "Three idiots",
    "Phir Hera Pheri",
    "Dhamaal",
    "Bhaag Milkha Bhaag"
  ];
  const [item, setItem] = useState(null);
  return (
    <div className="container">
      <div className="card text-center mt-5">
        <div className="card-body shadow styl">
          <h5 className="card-title pt-3">{Movie[item]}</h5>
          <button
            className="btn btn-primary my-3 px-5"
            onClick={() => {
              setItem(Math.floor(Math.random() * Movie.length));
            }}
          >
            Shuffle
          </button>
          <p>Player Name</p>
        </div>
      </div>
    </div>
  );
}
