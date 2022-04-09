'use strict';

/** ********************
Make an Event Handler
********************* */
const popupButton = document.querySelector("#popup-alert-button");

function showAlert() {
  alert('Peek-a-boo!');
}

popupButton.addEventListener('click', showAlert);

/** ***********************
Practice Your Times Tables
************************ */
const multiplyButton = document.querySelector('#multiply-btn');

function showMultiples(evt) {
  evt.preventDefault();

  const multiples = [];

  const divider = Number(document.querySelector('#mults-of').value);
  const userNum = Number(document.querySelector('#max').value);

  for (const num of Array(userNum + 1).keys()) {
    if (num % divider === 0) {
      multiples.push(num);
    }
  }

  console.log(multiples);
}

multiplyButton.addEventListener('click', showMultiples);

/** **************
An Agreeable Form
*************** */

// Your Code Here

/** ****************
Five colored primes
***************** */

const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];

// Your Code Here

/** *********
Got Puppies?
********** */

// NOTE: DO NOT CHANGE THE CODE OF THIS FUNCTION
function showPuppies(results) {
  // get the URL for the puppy photo out of the results object
  const puppyURL = results.url;
  const puppyDiv = document.querySelector('#puppies-go-here');
  // clear anything currently in the div
  puppyDiv.innerHTML = null;
  // add the img element
  puppyDiv.insertAdjacentHTML('beforeend', `<img src=${puppyURL} alt="puppy-image">`);
}

// Your Code Here
