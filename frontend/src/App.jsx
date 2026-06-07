import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import LiveBusMap from "./pages/LiveBusMap";
import Predictions from "./pages/Predictions";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        
        {/* Navigation Menu */}
        <nav
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "20px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <Link to="/">Dashboard</Link>
          <Link to="/map">Live Bus Map</Link>
          <Link to="/predictions">Predictions</Link>
          <Link to="/analytics">Analytics</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<LiveBusMap />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;