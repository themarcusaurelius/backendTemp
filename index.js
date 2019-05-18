const express = require('express');
const mongoose = require('mongoose')
const keys = require('./config/keys');
//Must be in this order to register the Schema for model 'users'
require('./models/user');
require('./services/passport');

//Connects MongoDB to Express API
mongoose.connect(keys.mongoURI, {useNewUrlParser: true});

//Express App used to register the route handler with.
const app = express();

//Returns a function and immedietley invokes app
require('./routes/authRoutes')(app)

//Dynamically figures out which port to listen to. If one hasn't been defined then by default use 5000
const PORT = process.env.PORT || 5000

//Instructs Express to tell Node to listen to PORT
app.listen(PORT);

