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

// function getMessage() {
//   $.ajax({
//     url: '/message',
//     method: 'GET',
//   }).then((response) => {
//     console.log(response);
//   });
// }
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
  //ajax post to server
  //.then call render function
}

function handleOperator() {
  //Figure out the operator that was clicked and assign it to an operator variable
  operator = $(this).closest('button').data('operator');
  console.log(operator);
}
// function handleClick() {
//     //collect inputs...
//     const newMath = {
//         numOne: $('#numOne').val(),
//         numTwo: $('#numTwo').val()
//     }
//     console.log(newMath);

//     //ajax request to server
//     // data should always be an object!
//     $.ajax({
//         url: '/maths',
//         method: 'POST',
//         data: newMath //data here becomes req.body on the server
//     }).then(function(response){
//         console.log(response);

//         //trigger a get!
//         getQuotes();
//     })

// }

// function getQuotes() {
//     console.log('start of getQuotes')
//     // Get all quotes from the server!
//     // AJAX
//     $.ajax({
//         url: '/quotes',
//         method: 'GET'
//     }).then(function(response) {
//         console.log(response);
//         //response is whatever res.send() sent us.
//         // render to DOM
//         render(response);
//     }).catch(function(error){
//         //404, 500, etc
//         console.log(error);
//         alert('ERROR IN GET /quotes')
//     })

//     console.log('end of getQuotes')

// }

// function render(quoteList) {
//     //empty -- dont want dupes
//     $('#output').empty();

//     //append it to the DOM

//     for(let quote of quoteList) {
//         $('#output').append(`<li>${quote.text} -- ${quote.author} </li>`)
//     }

// }
