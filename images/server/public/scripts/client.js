// $(onReady);

// function onReady() {
//     //GET DATA
//     getQuotes();
//     // getSecretCode();

//     $('#submit').on('click', handleClick);

// }

// function handleClick() {
//     //collect inputs...
//     const newQuote = {
//         author: $('#author').val(),
//         text: $('#text').val()
//     }
//     console.log(newQuote);

//     //ajax request to server
//     // data should always be an object!
//     $.ajax({
//         url: '/quotes',
//         method: 'POST',
//         data: newQuote //data here becomes req.body on the server
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