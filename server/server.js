// // Imports
const express = require('express');
const bodyParser = require('body-parser');
// const quoteList = require('./modules/quotes.js');

//Make an instance of a server
const app = express();
const PORT = 5000;

//Serve Static Files
app.use(express.static('server/public'));

// Setup Middlewares
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/message', function (req, res) {
  res.send(['hello', 'there', 'isaac']);
});

// app.post('/maths',  (req, res) => {
//     //well, where is the quote...?
//     console.log('POST /quotes', req.body);
//     // save our quote...
//     quoteList.push(req.body)

//     // send back response...
//     res.sendStatus(201);
// })

// app.get('/secret', function(req, res) {
//     res.sendStatus(418);
// })

// //run the server, on the port we want.
app.listen(PORT, function () {
  console.log('SERVER RUNNING ON PORT', PORT);
});
