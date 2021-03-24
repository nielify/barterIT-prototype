//importing packages
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Post = require('./models/Post');
require('dotenv/config');

const app = express();

//Middlewares
app.use(express.json()) //to get the req.body
app.use(express.static('public')); //static files
app.use(morgan('dev')); //logging

//monngodb connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) 
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

app.set('view engine', 'ejs'); //register view engine as ejs

//port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening to port ${port}`)); 

//importing routes
const marketplaceRoute = require('./routes/marketplace');

//routes
app.use('/marketplace', marketplaceRoute);

app.get('/', (req, res) => {
  res.render('index', { title: 'Homepage' });
}); 

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
}); 




