import mongoose from 'mongoose';

const connectString = `mongodb://127.0.0.1:27017/appMusic`;

class Database {
  private static instance: Database; // Private static property to hold the singleton instance

  private constructor() {
    this.connect();
  }

  private connect(type = 'mongodb') {
    if (process.env.NODE_ENV === 'production') { 
      mongoose.set('debug', { color: true });
    }

    mongoose
      .connect(connectString)
      .then(() => console.log('Connected to MongoDB successfully!'))
      .catch((error) => console.log('MongoDB connection failed:', error));
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
export default instanceMongodb;
