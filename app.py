from flask import Flask, render_template, request 
from markupsafe import Markup
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder
import requests
import config
# import tensorflow as tf
# print(tf.__version__)
# from tensorflow.keras.models import load_model
# from tensorflow.keras.utils import to_categorical
from keras.models import load_model
from keras.utils import to_categorical
from datetime import datetime
import mysql.connector


def weather_fetch(city):
    api_key = "d14d8c8f76ca6ab6778f6f6409100fc3"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"

    response = requests.get(url)
    x = response.json()
    print(x)

    if response.status_code == 200 and "main" in x:
        y = x["main"]
        temperature = y["temp"] 
        humidity = y["humidity"]
        return temperature, humidity
    else:
        print("Weather API error:", x)
        return None


app = Flask(__name__)

# conn = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password="",
#     database="crop_db"
# )

# cursor = conn.cursor()

now = datetime.now()


@ app.route('/')
def home():
    title = 'GrowEver - Home'
    return render_template('index.html', title=title)


@ app.route('/crop-recommend')
def crop_recommend():
    title = 'GrowEver - Crop Recommendation'
    return render_template('crop.html', title=title)


model = load_model(r'.\LSTM.h5')

df = pd.read_csv(r".\Data\crop_data.csv")

features = df[['N', 'P','K','temperature', 'humidity', 'ph', 'rainfall']]

le = LabelEncoder()
df['label_encoded'] = le.fit_transform(df['label'])

X = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']]
y = to_categorical(df['label_encoded'])

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)


@app.route('/crop-predict', methods=['POST'])
def crop_prediction():
    title = 'GrowEver - Crop Recommendation'

    if request.method == 'POST':
        N = float(request.form['nitrogen'])
        P = float(request.form['phosphorous'])
        K = float(request.form['pottasium'])
        ph = float(request.form['ph'])
        rainfall = float(request.form['rainfall'])
        city = request.form.get('city')

        if weather_fetch(city) != None:
            temperature, humidity = weather_fetch(city)
            data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])


            features_scaled = scaler.transform(data)

            preds = model.predict(features_scaled)
            predicted_label = le.inverse_transform(preds.argmax(axis=1))[0]

            # print(predicted_label)
            query = "INSERT INTO history_tb (Nitrogen, Phosphorous, Potassium, `pH Level`, `Rainfall (in mm)`, City) VALUES (%s, %s, %s, %s, %s, %s)"
            values = (N, P, K, ph, rainfall, city)

            # cursor.execute(query, values)
            # conn.commit()

            return render_template('crop-result.html', prediction=predicted_label, title=title)

        else:
            return render_template('try_again.html', title=title)






if __name__ == '__main__':
    app.run(debug=False)
