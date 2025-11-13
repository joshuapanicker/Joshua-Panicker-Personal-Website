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
  if (!connection) {
    connection = await mongoose.connect(url);
    return connection;
  }
};

export default connectDB;

