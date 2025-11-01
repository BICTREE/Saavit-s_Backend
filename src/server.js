import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/connectDB.js';
import app from './app.js';




connectDB()

const PORT = process.env.PORT || 8081

app.listen(PORT, ()=> console.log(`Server started at http://localhost:${PORT}`))