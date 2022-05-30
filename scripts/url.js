'use strict';

// Initiating get variable
let get = {};

// function parseUrl
// Will be used to parse GET variables in the URL.
// @return NUMBER: Amount of GET variables.
function parseUrl() {
  if(document.location.toString().indexOf('?') !== -1) {
    let location = document.location.toString(),
        queryStr = location.replace(/^.*?\?/, ''), // get the query string
        queryArr = queryStr.split('&'); // GET variables split by &

    for(let i = 0; i < queryArr.length; i++) {
       let getArr = decodeURIComponent(queryArr[i]).split('=');
       get[getArr[0]] = getArr[1];
    }
  }

  // @return NUMBER: amount of get variables
  return Object.keys(get).length;
}

// function buildUrl
// Can be used to build a new URL for fetch requests or links.
// @param: STRING base, OBJECT params
// base: Will be used as the first part of the URL.
// params: Will be added as GET variables at the end of the URL.
// @return STRING: A URL will be returned.
function buildUrl(base, params) {
  let url = base;

  if (Object.keys(params).length > 0) { // If params aren't empty
    let first = true; // Used to check first variable in string.

    for (const property in params) { // Looping through params object.

      if (first && url.indexOf('?') == -1) { // Checking if first variable or if url already has a ?
        url += '?';
        first = false;
      } else { // If not first variable & will be added.
        url += '&';
      }

      // Property and value will be added to string.
      url += property + '=' + params[property];
    }
  }

  // @return STRING: full URL.
  return url;
}

// function decode
// Will be used for decoding HTMLentities in correct answers.
// @param: STRING value
// value: Will be a response value with possible HTMLentities.
function decode(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}
