// // Imports
// const express = require('express');
// const bodyParser = require('body-parser');
// const quoteList = require('./modules/quotes.js');

// //Make an instance of a server
// const app = express();
// const PORT = 5000;

// //Serve Static Files
// app.use(express.static('server/public'));

// // Setup Middlewares
// app.use(bodyParser.urlencoded({ extended: true }));

// //localhost:5000/quotes
// app.get('/quotes', function(req, res) {
//     console.log('IN GET QUOTES');
//     res.send(quoteList);
// });

// app.post('/quotes',  (req, res) => {
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
// app.listen(PORT, function() {
//     console.log('SERVER RUNNING ON PORT', PORT)
// });