import Crypto from "../models/cryptoModel.js";

// Task 2: Fetch latest data for the requested cryptocurrency
export const getCryptoStats = async (req, res) => {
  const { coinId } = req.query;

  if (!coinId) {
    return res.status(400).json({ error: "coinId is required" });
  }

  try {
    const latestData = await Crypto.findOne({ coinId }).sort({ timestamp: -1 });
    if (!latestData) {
      return res
        .status(404)
        .json({ error: "No data found for the requested cryptocurrency" });
    }

    res.json(latestData);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Task 3: Calculate standard deviation of price for the requested cryptocurrency
export const getPriceDeviation = async (req, res) => {
  const { coinId } = req.query;

  if (!coinId) {
    return res.status(400).json({ error: "coinId is required" });
  }

  try {
    const records = await Crypto.find({ coinId })
      .sort({ timestamp: -1 })
      .limit(100);
    if (records.length === 0) {
      return res
        .status(404)
        .json({ error: "No data found for the requested cryptocurrency" });
    }

    const prices = records.map((record) => record.price);

    // Calculate standard deviation
    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const variance =
      prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) /
      prices.length;
    const stdDeviation = Math.sqrt(variance);

    res.json({ coinId, stdDeviation });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
