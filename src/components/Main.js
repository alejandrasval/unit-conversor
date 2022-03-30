import React, { useState } from "react";
import "./Styles.css";

const Main = () => {
  const [value, setValue] = useState(0);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container">
      <header>
        <h1>Metric/Imperial Unit Conversor</h1>
        <input
          onChange={handleInput}
          type="number"
          placeholder="Enter a number"
        ></input>
      </header>
      <div className="results">
        <div>
          <h2>Length (Meter/Feet)</h2>
          <p>
            {value} m = {(value * 3.2808).toFixed(2)} ft | {value} ft ={" "}
            {(value / 3.2808).toFixed(2)} m
          </p>
        </div>
        <div>
          <h2>Volume (Liters/Gallons)</h2>
          <p>
            {value} L = {(value * 0.2641720524).toFixed(2)} gal | {value} gal ={" "}
            {(value / 0.2641720524).toFixed(2)} L
          </p>
        </div>
        <div>
          <h2>Mass (Kilograms/Pounds)</h2>
          <p>
            {value} kg = {(value * 2.2046).toFixed(2)} lb | {value} lb ={" "}
            {(value / 2.2046).toFixed(2)} kg
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
