const express = require('express');
const connectDB = require('./config/db');


// Connect to MongoDB
connectDB();
const app = express();
app.use(express.json());


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});