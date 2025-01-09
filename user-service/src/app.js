const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const app = express();

   require('dotenv').config();

   connectDB();

   app.use(express.json()); // Parse JSON requests
   app.use('/api/users', userRoutes); // Use user routes

   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`);
   });