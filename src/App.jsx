import React, { useMemo, useState } from "react";
import './App.css';

function App() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(180);

  function onWeightChange(e) {
    setWeight(e.target.value);
  }

  function onHeightChange(e) {
    setHeight(e.target.value);
  }

  const output = useMemo(() => {
    const calCalculateHeight = height / 100;

    return (weight / calCalculateHeight).toFixed(1);
  }, [weight, height]);
  return (
    <main>
      <h1>Project 4 : BMI Calculater</h1>
      <div className="input-section">
        <p className="slider-output">Weight:{weight}kg</p>
        <input
          onChange={onWeightChange}
          type="range"
          className="input-slider"
          stop="1"
          min="40"
          max="400"
        />
        <p className="slider-output">Height:{height}cm</p>
        <input
          type="range"
          onChange={onHeightChange}
          className="input-slider"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;
