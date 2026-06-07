import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LiveBusMap() {
  const position = [12.9716, 77.5946];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🚌 Live Bus Tracking</h1>

      <MapContainer
        center={position}
        zoom={13}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            <b>BUS101</b>
            <br />
            Current Location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default LiveBusMap;