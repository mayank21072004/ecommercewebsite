import dotenv from 'dotenv';
dotenv.config();

import express from 'express'; 
import connectDB from './config/db.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import path from 'path';
import productRoutes from "./routes/productRoutes.js";
import removeRoute from "./routes/removeRoute.js";
import allproducts from "./routes/allproducts.js";
import { __dirname } from './utility.js';

// Create Express app
const app = express();

// Middleware
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS

// Connect to the database
connectDB();

// Routes
app.use('/api', productRoutes);
app.use('/api', removeRoute);
app.use('/api/v3', allproducts);


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Root route
app.get("/", (req, res) => {
    res.send("App is running");
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`);
});
