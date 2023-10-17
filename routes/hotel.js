import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controller/hotel.js";

const router = express.Router();

// create hotel
router.post("/create", createHotel);

// update hotel
router.put("/:id", updateHotel);

// delete hotel
router.delete("/:id", deleteHotel);

// show = id
router.get("/:id", getHotel);

// show all
router.get("/", getAllHotel);

export default router;
