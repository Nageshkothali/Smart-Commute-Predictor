from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

eta_model = joblib.load("eta.pkl")
seat_model = joblib.load("seats.pkl")


@app.get("/")
def home():
    return {"message": "Smart Commute API Running"}


@app.get("/predict_eta")
def predict_eta(distance: float, speed: float, hour: int, day: int):
    prediction = eta_model.predict([[distance, speed, hour, day]])

    return {
        "ETA": round(float(prediction[0]), 2)
    }


@app.get("/predict_seats")
def predict_seats(hour: int, route: int, occupancy: float):
    prediction = seat_model.predict([[hour, route, occupancy]])

    return {
        "available_seats": round(float(prediction[0]))
    }


@app.get("/bus_location")
def bus_location():
    return {
        "bus_id": "BUS101",
        "latitude": 12.9716,
        "longitude": 77.5946,
        "status": "Running"
    }


@app.get("/analytics")
def analytics():
    return {
        "avg_eta": 15.72,
        "avg_occupancy": 68,
        "daily_rides": 1250,
        "active_buses": 42
    }