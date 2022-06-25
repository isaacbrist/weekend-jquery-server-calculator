// // Imports
const express = require('express');
const bodyParser = require('body-parser');
const mathList = require('./modules/mathList.js');

const app = express();
const PORT = 5000;

//Serve Static Files
app.use(express.static('server/public'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

//test get
app.get('/maths', function (req, res) {
  console.log('in GET/maths')
  res.send(mathList);
});

app.post('/maths',  (req, res) => {
    console.log('in POST /maths', req.body);
    mathList.push(req.body)

    // send back response...
    res.sendStatus(201);
})


app.listen(PORT, function () {
  console.log('SERVER RUNNING ON PORT', PORT);
});
