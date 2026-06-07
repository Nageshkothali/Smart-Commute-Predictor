import { useEffect, useState } from "react";

function Dashboard() {
  const [eta, setEta] = useState(null);
  const [seats, setSeats] = useState(null);
  const [bus, setBus] = useState(null);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch(
      "http://127.0.0.1:8000/predict_eta?distance=10&speed=40&hour=9&day=1"
    )
      .then((res) => res.json())
      .then((data) => setEta(data.ETA));

    fetch(
      "http://127.0.0.1:8000/predict_seats?hour=9&route=1&occupancy=60"
    )
      .then((res) => res.json())
      .then((data) => setSeats(data.Available_Seats));

    fetch("http://127.0.0.1:8000/bus_location")
      .then((res) => res.json())
      .then((data) => setBus(data));

    fetch("http://127.0.0.1:8000/analytics")
      .then((res) => res.json())
      .then((data) => setAnalytics(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚍 Smart Commute Dashboard</h1>

      <div style={{ border: "1px solid gray", padding: "15px", margin: "10px" }}>
        <h2>📍 Current Bus Location</h2>
        {bus ? (
          <>
            <p>Bus ID: {bus.bus_id}</p>
            <p>Latitude: {bus.latitude}</p>
            <p>Longitude: {bus.longitude}</p>
            <p>Status: {bus.status}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div style={{ border: "1px solid gray", padding: "15px", margin: "10px" }}>
        <h2>⏱ ETA</h2>
        <p>{eta !== null ? `${eta.toFixed(2)} Minutes` : "Loading..."}</p>
      </div>

      <div style={{ border: "1px solid gray", padding: "15px", margin: "10px" }}>
        <h2>💺 Available Seats</h2>
        <p>{seats !== null ? Math.round(seats) : "Loading..."}</p>
      </div>

      <div style={{ border: "1px solid gray", padding: "15px", margin: "10px" }}>
        <h2>👥 Crowd Status</h2>

        {analytics ? (
          <>
            <p>Average Occupancy: {analytics.avg_occupancy}%</p>
            <p>Status: {analytics.crowd_status}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;