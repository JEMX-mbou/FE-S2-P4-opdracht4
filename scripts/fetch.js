'use strict';

// function request
// A function set up to talk to a couple of endpoints of the Open Trivia Database
// @params: STRING endpoint, STRING callback, OBJECT params
// endpoint: is used to select an endpoints
// callback: is a function that will be executed on succesfull request
// params: can be used to send multiple parameters
function request(endpoint, callback = false, params = {}) {
  const base = 'https://opentdb.com'; // Base Open Trivia Database URL
  const endpoints = {
    'new_token': 'api_token.php?command=request', // New token endpoint
    'reset_token': 'api_token.php?command=reset', // Reset token endpoint
    'categories': 'api_category.php', // All categories endpint
    'questions': 'api.php' // Question endpoint
  }

  // For the new_token and categories endpoint it isn't necessary to use a token.
  if (endpoint != 'new_token' && endpoint != 'categories') params.token = token;

  // buildUrl function is executed to generate a valid URL.
  let url = buildUrl( base + '/' + endpoints[endpoint], params);

  // fetch api is used
  fetch( url )
    .then(( response ) => { return response.json() }) // response is parsed.
    .then(( data ) => {

      if (data.response_code == 4) { // Token isn't valid anymore and needs to be reset.
        request('reset_token'); // Reset endpoint is requested.
        alert('Try different category!');
      } else if (callback) {
        window[callback](data); // callback function is executed and response is data parameter.
      }

      console.log(data); // Data is logged.

    })
    .catch(( error ) => { // If request results in error
      throw(error);
    }
  );
}
