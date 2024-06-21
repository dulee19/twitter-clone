import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Routes
import authRoutes from './routes/authRoutes.js'
import connectDB from './config/db.js';

dotenv.config();

// Database
connectDB();

const app = express();

app.use('/api/auth', authRoutes);

// Middleware
app.use(cors());
app.use(express.json());

// PORT
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`));