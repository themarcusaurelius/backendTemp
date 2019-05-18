const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

//Telling mongoose we want to create a new collection
mongoose.model('users', userSchema)