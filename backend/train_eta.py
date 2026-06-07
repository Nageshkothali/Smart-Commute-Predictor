import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib

# Sample training data
data = {
    "distance": [5, 10, 15, 20, 25, 30],
    "speed": [30, 40, 35, 50, 45, 60],
    "hour": [8, 9, 10, 11, 12, 13],
    "day": [1, 2, 3, 4, 5, 6],
    "eta": [10, 15, 25, 24, 35, 30]
}

df = pd.DataFrame(data)

X = df[["distance", "speed", "hour", "day"]]
y = df["eta"]

model = RandomForestRegressor(n_estimators=100)

model.fit(X, y)

joblib.dump(model, "eta.pkl")

print("ETA model trained and saved as eta.pkl")