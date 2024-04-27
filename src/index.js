const express = require('express');
const weaponRoutes = require('./routes/weaponRoutes')

const PORT = 5000;
const app = express();

// Middleware
app.use(express.json());

app.use("/weapon", weaponRoutes);

app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
})