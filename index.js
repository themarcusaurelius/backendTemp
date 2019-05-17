const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//Express App to register the route handler with.
const app = express();
//Route Handle - creates and registers a new instance of google strategy
passport.use(new GoogleStrategy());
//Dynamically figures out which port to listen to. If one hasn't been defined then by default use 5000
const PORT = process.env.PORT || 5000
//Instructs Express to tell Node to listen to PORT
app.listen(PORT);


