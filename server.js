const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('App Listening'));

//Define routes
app.use('/api/registration', require('./routes/api/userRegistration'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/getUser', require('./routes/api/getUserDetails'));
app.use('/api/searchUser', require('./routes/api/searchUser'));
app.use('/api/profile', require('./routes/api/profile')); //editprofile
app.use('/api/getUserProfile', require('./routes/api/getUserDetails'));
app.use('/api/account', require('./routes/api/account'));

//admin
app.use('/adminApi/league', require('./routes/adminApi/league'));
app.use(
  '/adminApi/getLeagueDetails',
  require('./routes/adminApi/getLeagueDetails')
);

app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`));
