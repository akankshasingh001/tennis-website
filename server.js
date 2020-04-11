const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('App Listening'));

app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`));
