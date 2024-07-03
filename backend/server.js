import express from "express";
import api from "./routes/index.js";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./db/connectMongo.js";

dotenv.config();

console.log('SERVER_PORT:', process.env.SERVER_PORT);
console.log('CORS_ORIGIN:', process.env.CORS_ORIGIN);
console.log('MONGODB_PATH:', process.env.MONGODB_PATH);

const app = express();

const PORT = process.env.SERVER_PORT || 9000;
const origin = process.env.CORS_ORIGIN || "http://localhost:5000";

app.use(cors({ origin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api);

app.listen(PORT, () => {
  console.log(`Your app is running at http://localhost:${PORT}`);
  connectMongoDB();
});