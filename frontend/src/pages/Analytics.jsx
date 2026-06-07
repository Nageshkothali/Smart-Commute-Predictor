import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function Analytics() {

  const peakHours = [
    { hour: "6 AM", passengers: 40 },
    { hour: "8 AM", passengers: 120 },
    { hour: "10 AM", passengers: 70 },
    { hour: "12 PM", passengers: 90 },
    { hour: "6 PM", passengers: 150 },
    { hour: "8 PM", passengers: 100 }
  ];

  const occupancyTrend = [
    { day: "Mon", occupancy: 60 },
    { day: "Tue", occupancy: 72 },
    { day: "Wed", occupancy: 68 },
    { day: "Thu", occupancy: 75 },
    { day: "Fri", occupancy: 88 }
  ];

  const routePerformance = [
    { route: "Route A", score: 95 },
    { route: "Route B", score: 80 },
    { route: "Route C", score: 90 },
    { route: "Route D", score: 70 }
  ];

  const etaTrend = [
    { stop: 1, eta: 5 },
    { stop: 2, eta: 8 },
    { stop: 3, eta: 12 },
    { stop: 4, eta: 15 },
    { stop: 5, eta: 18 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Analytics Dashboard</h1>

      <h2>Peak Hour Analysis</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={peakHours}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="passengers" />
        </BarChart>
      </ResponsiveContainer>

      <h2>Occupancy Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={occupancyTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="occupancy" />
        </LineChart>
      </ResponsiveContainer>

      <h2>Route Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={routePerformance}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="route" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" />
        </BarChart>
      </ResponsiveContainer>

      <h2>ETA Prediction Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={etaTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="stop" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="eta" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default Analytics;