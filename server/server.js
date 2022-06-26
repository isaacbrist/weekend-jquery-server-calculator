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
  console.log('in calculations');
  let data = req.body;
  let operator = data.operator;
  let numOne = Number(data.numOne);
  console.log('here is num 1', numOne);
  let numTwo = Number(data.numTwo);
  console.log('here is num 2', numTwo);
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
      break;
    default:
      res
        .status(400)
        .send(`Invalid operator ${operator}. Please input a valid operator`);
      break;
  }
  // The newly calculated math
  newMath = {
    numOne: numOne,
    operator: operator,
    numTwo: numTwo,
    answer: result,
  };
  mathList.push(newMath);
  res.sendStatus(201);
});
// calculations(req.body);
//   mathList.push(req.body);
//   // send back response
//   res.sendStatus(201);
// });

//function to take in the new math, use the included operator to calculate the result,
//and return the result as a new property of the object.
// function calculations() {
//   console.log('in calculations');
//   let data = req.body;
//   let operator = data.operator;
//   let numOne = Number(data.numberOne);
//   let numTwo = Number(data.numberTwo);
//   switch (operator) {
//     case '+':
//       result = numOne + numTwo;
//       console.log(result);
//       break;
//     case '-':
//       result = numOne - numTwo;
//       console.log(result);
//       break;
//     case '*':
//       result = numOne * numTwo;
//       console.log(result);
//       break;
//     case '/':
//       result = numOne / numTwo;
//       console.log(result);
//     default:
//       res
//         .status(400)
//         .send(`Invalid operator ${operator}. Please input a valid operator`);
//       break;
//   }
//   // The newly calculated math
//   newMath = {
//     numOne: numOne,
//     operator: operator,
//     numTwo: numTwo,
//     answer: result,
//   };
//   mathList.push(newMath);
//   res.sendStatus(200);
// }
app.listen(PORT, function () {
  console.log('SERVER RUNNING ON PORT', PORT);
});
