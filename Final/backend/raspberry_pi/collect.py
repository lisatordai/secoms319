import pymongo
import board
import adafruit_dht
import datetime
import time

# MongoDB connection string
mongo_uri = "mongodb+srv://ltordai:IxbzvnbKkDEhmMcf@cluster0.8grfzis.mongodb.net/final"

# Connect to MongoDB
client = pymongo.MongoClient(mongo_uri)

# Specify the database and collection
db = client['final']
collection = db['data']

# DHT sensor settings
pin = board.D4  # GPIO pin where the sensor is connected
dhtDevice = adafruit_dht.DHT11(pin)

def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

try:
    while True:
        # Read temperature and humidity from the sensor
        try:
            temperature_celsius = dhtDevice.temperature
            humidity = dhtDevice.humidity
        except RuntimeError as e:
            print(f"Error reading from DHT sensor: {e}")
            continue

        # Convert temperature to Fahrenheit
        temperature_fahrenheit = celsius_to_fahrenheit(temperature_celsius)

        # Save the data to MongoDB
        if humidity is not None and temperature_celsius is not None:
            # Get the current time
            current_time = datetime.datetime.now()

            # Create a document to insert into the collection
            document = {
                "time": current_time,
                "temperature_celsius": temperature_celsius,
                "temperature_fahrenheit": temperature_fahrenheit,
                "humidity": humidity
            }

            # Insert the document into the collection
            collection.insert_one(document)

            print(f"Data inserted: Time={current_time}, Temperature(C)={temperature_celsius}, Temperature(F)={temperature_fahrenheit}, Humidity={humidity}")

        # Wait for a minute before reading and saving the next data
        time.sleep(60)

except KeyboardInterrupt:
    print("Script terminated by user.")
finally:
    # Close the MongoDB connection
    client.close()
