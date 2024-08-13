const express = require('express');
const router = require('./routes/users');
require ('dotenv').config();
const ejs = require('ejs');


const app = express();
const PORT = process.env.PORT || 3000;

const userRoute = require('./routes/users');

app.use(router);

app.set ('view engine', 'ejs');
app.set ('views', './views');

app.use(express.static('public'));
app.use(userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});