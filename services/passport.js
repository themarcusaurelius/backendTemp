const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//Gives access to user model class
const User = mongoose.model('users');

//Encoding Users - Take identifying information from existing user to reuse later. user.id is from the mongo identifier not profile id.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//Creates and registers a new instance of google strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            //Atempt to find users already in database to not add again
            User.findOne({ googleId: profile.id }).then((existingUser) => {
                if (existingUser) {
                    //We already have a record with the given ID
                    done(null, existingUser);
                } else {
                    //Takes new mongoose model instance and saves to the database
                    new User({ googleId: profile.id})
                        .save()
                        .then(user => done(null, user))
                }
            })
        }
    )
);