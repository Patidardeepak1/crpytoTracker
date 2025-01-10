import express from "express";
import {
  getCryptoStats,
  getPriceDeviation,
} from "../controller/cryptoController.js";

const router = express.Router();

// Task 2: /stats API
router.get("/stats", getCryptoStats);

// Task 3: /deviation API
router.get("/deviation", getPriceDeviation);

export default router;
