import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT | 5000;

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
app.use("/api/users", userRouter);

app.get("/", (req, res) => res.send("server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log("server run on port:", port));

// POST /api/users **resgister a user
// POST /api/users/auth **authenticate a user and get token
// POST /api/users/logout **logout user and clear cookie
// GET /api/users/profile **get user profile
// PUT /api/users/profile **update profile
