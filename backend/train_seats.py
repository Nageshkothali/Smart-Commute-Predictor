import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib

# Sample training data
data = {
    "hour": [8, 9, 10, 11, 12, 13, 14, 15],
    "route": [1, 1, 2, 2, 3, 3, 1, 2],
    "occupancy": [40, 45, 20, 25, 35, 38, 42, 28],
    "available_seats": [10, 5, 30, 25, 15, 12, 8, 22]
}

df = pd.DataFrame(data)

X = df[["hour", "route", "occupancy"]]
y = df["available_seats"]

model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X, y)

joblib.dump(model, "seats.pkl")

print("Seat Prediction Model trained and saved as seats.pkl")