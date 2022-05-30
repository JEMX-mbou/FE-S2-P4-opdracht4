'use strict';

// responseEl Element variable is initiated and div#response is selected
const responseEl = document.querySelector('div#response');

// correctAnswers Object variable is initiated
let correctAnswers = {};

// function showCategories
// Will be used to display all the categories available on Open Trivia Database.
// @param: OBJECT data
// data: response of api.
function showCategories( data ) {
  data.trivia_categories.forEach((category) => {
    let url = buildUrl('index.html', {'category_id': category.id});

    let innerHTML = '<a href="'+url+'">';
        innerHTML += '<button class="alert c-1">' + category.name + '</button></a>';

    responseEl.innerHTML += innerHTML;
  });
}

// function shuffleAnswers
// Will be used to concatenate the right and wrong answers and randomize them.
// @params: STRING correct, ARRAY wrong
// correct: response of API
// wrong: response of API
function shuffleAnswers(correct, wrong) {
    let array = wrong.concat(correct);
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// stap B.4

// stap B.6

// stap C.1 t/m C.7

// stap D.1 t/m D.5

window.onload = () => {
  if (!parseUrl()) {
    // If there are no GET variables set the request function is fired.
    // Used to get all the categories.
    // endpoint: categories, callback: showCategories
    // Callback function showCategories is fired when the request is succesfull.
    request('categories', 'showCategories');
  } else {
    // stap B.3
    // stap B.5
    // stap B.7
  }
}
