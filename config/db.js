const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('connecting database.....'.yellow);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDb connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.log(`mongo error:${error.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;