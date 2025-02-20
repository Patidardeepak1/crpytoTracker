# Crypto Tracker Backend

This is the backend of the Crypto Tracker application, designed to provide real-time cryptocurrency data and statistical insights via an API. It fetches data from the CoinGecko API, stores it in a MongoDB database, and serves various endpoints that allow users to fetch crypto stats and price deviations.

The project is live and can be accessed via the following link:

- **Live Website:** [CryptoTracker Live](https://cryptotracker.onrender.com)

---

## Features

- **Fetch Latest Crypto Stats:** Retrieves the latest price, market cap, and 24-hour change for the requested cryptocurrency.
- **Price Deviation Calculation:** Calculates the standard deviation of the price for a given cryptocurrency based on the last 100 records.
- **Background Job:** Automatically runs every 2 hours to fetch and update cryptocurrency data.

---

## API Endpoints

### 1. **Fetch Latest Crypto Stats**

- **Endpoint:** `/api/stats`
- **Method:** `GET`
- **Query Parameters:**
  - `coinId` (Required): The ID of the cryptocurrency (e.g., `bitcoin`, `ethereum`, `matic-network`).

**Sample Request:**

```http
GET https://cryptotracker.onrender.com/api/stats?coinId=bitcoin

```
