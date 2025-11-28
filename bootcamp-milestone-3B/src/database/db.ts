// db.ts

import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;
let connection: typeof mongoose;

/**
 * Makes a connection to a MongoDB database. If a connection already exists, does nothing
 * Call this function at the start of api routes and data fetches
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (!url) {
    throw new Error(
      "MONGO_URI is not defined. Please create a .env.local file with your MongoDB connection string."
    );
  }
  
  // If already connected, return existing connection
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }
  
  if (!connection) {
    try {
      connection = await mongoose.connect(url, {
        serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of 30
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      });
      return connection;
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw error;
    }
  }
  
  return connection;
};

export default connectDB;

