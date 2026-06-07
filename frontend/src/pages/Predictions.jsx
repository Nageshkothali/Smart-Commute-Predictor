import { useState } from "react";

function Predictions() {
  const [route, setRoute] = useState("500D");
  const [stop, setStop] = useState("Silk Board");

  const [result, setResult] = useState({
    distance: 2.8,
    eta: 7,
    seats: 11,
    crowd: "Medium",
    recommendation: "Board this bus"
  });

  const handlePredict = () => {
    setResult({
      distance: 2.8,
      eta: 7,
      seats: 11,
      crowd: "Medium",
      recommendation: "Board this bus"
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚌 Smart Commute Predictor</h1>

      <div>
        <label>Route:</label>
        <input
          type="text"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Stop:</label>
        <input
          type="text"
          value={stop}
          onChange={(e) => setStop(e.target.value)}
        />
      </div>

      <br />

      <button onClick={handlePredict}>
        Predict
      </button>

      <hr />

      <h2>Results</h2>

      <p><b>Route:</b> {route}</p>
      <p><b>Stop:</b> {stop}</p>

      <p><b>Bus Distance:</b> {result.distance} km</p>
      <p><b>ETA:</b> {result.eta} min</p>
      <p><b>Available Seats:</b> {result.seats}</p>
      <p><b>Crowd Level:</b> {result.crowd}</p>

      <h3>
        Recommendation: {result.recommendation}
      </h3>
    </div>
  );
}

export default Predictions;