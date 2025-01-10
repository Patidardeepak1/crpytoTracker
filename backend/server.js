import express from "express";
import cron from "node-cron";

import cryptoRoutes from "./routes/cryptoRoutes.js";
import fetchCryptoData from "./services/backgroundJob.js";
import connectToDatabase from "./database/db.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

// App setup
const app = express();
app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Routes
app.use("/api", cryptoRoutes);

// Run the background job once when the app starts
fetchCryptoData();

// Schedule the background job
cron.schedule("0 */2 * * *", fetchCryptoData);

// Start the server
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
