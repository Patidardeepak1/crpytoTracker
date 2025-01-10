import mongoose from "mongoose";

const CryptoSchema = new mongoose.Schema({
  coinId: { type: String, required: true }, // Coin ID (e.g., bitcoin, matic-network, ethereum)
  price: { type: Number, required: true }, // Price in USD
  marketCap: { type: Number, required: true }, // Market Cap in USD
  change24h: { type: Number, required: true }, // 24-hour change in %
  timestamp: { type: Date, default: Date.now }, // When the data was fetched
});

const Crypto = mongoose.model("Crypto", CryptoSchema);

export default Crypto;
