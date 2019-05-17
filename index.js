const express = require('express');
//Express App to register the route handler with.
const app = express();
//Route Handler
app.get('/', (req,res) => {
    res.send({ hi: 'bye' })
});
//Dynamically figures out which port to listen to. If one hasn't been defined then by default use 5000
const PORT = process.env.PORT || 5000
//Instructs Express to tell Node to listen to port
app.listen(PORT);


