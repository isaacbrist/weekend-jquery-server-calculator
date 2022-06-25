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
app.get('/maths', (req, res) => {
  console.log('in GET/maths');
  res.send(mathList);
});

app.post('/maths', (req, res) => {
  console.log('in POST /maths', req.body);
  //maybe add in the math function here using req.body and then pushing the new result
  let newMath = req.body; //not sure if this will work
  calculations(newMath);
  mathList.push(req.body);

  // send back response...
  res.sendStatus(201);
});

//function to take in the new math, use the included operator to calculate the result,
//and return the result as a new property of the object.
function calculations() {
  console.log('in calculations');
  let numOne = newMath.numOne;
  let operator = newMath.operator;
  let numTwo = newMath.numTwo;
  let result;

  switch (operator) {
    case '+':
      result = numOne + numTwo;
      console.log(result);
      break;
    case '-':
      result = numOne - numTwo;
      console.log(result);
      break;
    case '*':
      result = numOne * numTwo;
      console.log(result);
      break;
    case '/':
      result = numOne / numTwo;
      console.log(result);
    default:
      console.log('ERROR, click at least one operator ');
      break;
  }
}
app.listen(PORT, function () {
  console.log('SERVER RUNNING ON PORT', PORT);
});
