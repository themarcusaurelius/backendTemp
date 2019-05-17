const express = require('express');
//Express App to register the route handler with.
const app = express();
//Route Handler
app.get('/', (req,res) => {
    res.send({ hi: 'there' })
});
//Dynamically figures out which port to listen to. If one hasn't been defined then by default use 5000
const port = process.env.PORT || 5000
//Instructs Express to tell Node to listen to port 5000
app.listen(5000);


