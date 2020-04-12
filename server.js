const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('App Listening'));

//routes
app.use('/api/registration', require('./routes/api/userRegistration'));

app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`));
