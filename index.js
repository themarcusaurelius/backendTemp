const express = require('express');
//Express App to register the route handler with.
const app = express();
//Route Handler
app.get('/', (req,res) => {
    res.send({ hi: 'there' })
});
//Instructs Express to tell Node to listen to port 5000
app.listen(5000);


