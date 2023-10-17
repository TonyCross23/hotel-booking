import express from "express";
import bodyParser from "body-parser";
import dotEnv from "dotenv";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import hotelRoute from "./routes/hotel.js";
import mongoose from "mongoose";

const app = express();
dotEnv.config();

// middleware
app.use(bodyParser.json());

//roue
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/hotel", hotelRoute);

app.use((req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// port
const port = process.env.PORT || 5000;
const monclient = process.env.MONGO_URL;

app.listen(port, async (e) => {
  if (e) return console.log(e);
  console.log(`Server is running on port ${port}`);

  const con = await mongoose.connect(monclient);
  console.log(`MongoDb connected: ${con.connection.host}`);
});
