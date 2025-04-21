require('dotenv').config();
const express = require('express');
const app = express();
const cacheRoutes = require('./routes/routes.js');

app.use(express.json());
app.use('/api', cacheRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});