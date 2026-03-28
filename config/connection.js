import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect(process.env.MONGO_URI);
console.log('Connected to MongoDB!')

const db = mongoose.connection;

export default db;