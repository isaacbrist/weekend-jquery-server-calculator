$(onReady);

function onReady() {
  //GET DATA
  //  getQuotes();

  getMessage();

  $('#addButton').on('click', handleOperator);
  $('#subButton').on('click', handleOperator);
  $('#multiButton').on('click', handleOperator);
  $('#divButton').on('click', handleOperator);
  $('#equalButton').on('click', handleSubmit);
  $('#clearButton').on('click', handleClear);
}
let operator;

function getMessage() {
  $.ajax({
    url: '/message',
    method: 'GET',
  }).then((response) => {
    console.log(response);
  });
}
function handleClear() {
  $('#numOne').val('');
  $('#numTwo').val('');
  operator = undefined;
  console.log('deleted');
}
function handleSubmit() {
  const newMath = {
    numOne: $('#numOne').val(),
    numTwo: $('#numTwo').val(),
    operator: operator,
  };
  console.log(newMath);
  //ajax post to server
  //.then call render function
  $.ajax({
    url: '/maths',
    method: 'POST',
    data: newMath, //data here becomes req.body on the server
  })
    .then(function (response) {
      console.log(response);
      getMaths();
    })
    .catch(function (error) {
      console.log(error);
      alert('ERROR IN POST /maths');
    });
}

function handleOperator() {
  //Figure out the operator that was clicked and assign it to an operator variable
  operator = $(this).closest('button').data('operator');
  console.log(operator);
}

function getMaths() {
  console.log('start of getMaths');
  // Get all maths from the server!
  $.ajax({
    url: '/maths',
    method: 'GET',
  })
    .then(function (response) {
      console.log(response);
      //response is whatever res.send() sent us.
      // render to DOM
      // render(response);
    })
    .catch(function (error) {
      console.log(error);
      alert('ERROR IN GET /maths');
    });

  console.log('end of getMaths');
}

// function handleClick() {
//     //collect inputs...
//     const newMath = {
//         numOne: $('#numOne').val(),
//         numTwo: $('#numTwo').val()
//     }




// function render(quoteList) {
//     //empty -- dont want dupes
//     $('#output').empty();

//     //append it to the DOM

//     for(let quote of quoteList) {
//         $('#output').append(`<li>${quote.text} -- ${quote.author} </li>`)
//     }

// }
