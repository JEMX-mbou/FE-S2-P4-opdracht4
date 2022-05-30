'use strict';

document.querySelector('button#new_token').addEventListener('click', () => {
  if (!token) request('new_token', 'newToken');
  else alert('Token already created!');
});

document.querySelector('button#reset_token').addEventListener('click', () => {
  request('reset_token', 'resetToken');
});


// Function newToken
// Will be used to display the new token on index.html
// @param: OBJECT data
// data: is response object from request
function newToken( data ) {
  const responseEl = document.querySelector('div#response');

  responseEl.innerHTML = '<h3>New token created</h3>';
  responseEl.innerHTML += '<span class="alert c-2 txt-l">'+data.token+'</span>';
  responseEl.innerHTML += '<span class="my-2">Paste this token in scripts/token.js</span>';
  responseEl.innerHTML += '<code>const token = "[paste token here]";</code>';
}

// Function newToken
// Will be used to display the resetted token on index.html
// @param: OBJECT data
// data: is response object from request
function resetToken( data ) {
  const responseEl = document.querySelector('div#response');

  responseEl.innerHTML = '<h3>Token has been reset!</h3>';
  responseEl.innerHTML += '<span class="alert c-2 txt-l">'+data.token+'</span>';
}
