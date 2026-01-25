import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});
// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
console.log(PORT);

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
