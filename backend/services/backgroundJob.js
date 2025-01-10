import axios from "axios";
import Crypto from "../models/cryptoModel.js";

const API_URL = "https://api.coingecko.com/api/v3/simple/price";
const COINS = ["bitcoin", "matic-network", "ethereum"];

const fetchCryptoData = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        ids: COINS.join(","),
        vs_currencies: "usd",
        include_market_cap: true,
        include_24hr_change: true,
      },
    });

    const data = response.data;

    for (const coin of COINS) {
      const crypto = new Crypto({
        coinId: coin,
        price: data[coin].usd,
        marketCap: data[coin].usd_market_cap,
        change24h: data[coin].usd_24h_change,
      });
      await crypto.save();
    }

    console.log("Crypto data fetched and stored successfully!");
  } catch (error) {
    console.error("Error fetching crypto data:", error.message);
  }
};

export default fetchCryptoData;
