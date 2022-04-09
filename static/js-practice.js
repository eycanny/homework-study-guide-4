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

const agreeButton = document.querySelector('#agreeable-form input[type="submit"]');

function agreeWithUser(evt) {
  evt.preventDefault();
  const favoriteFood = document.querySelector('#agreeable-form input[type="text"]').value;
  document.querySelector('#agreeable-text').innerText = `I like ${favoriteFood} too!`;
}

agreeButton.addEventListener('click', agreeWithUser);

/** ****************
Five colored primes
***************** */

// const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];
// const primeButton = document.querySelector('#make-prime-circles');

// function showPrimeNumbers() {
//   evt.preventDefault();
//   const primeNumbers = [];
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

//   for (const num of numbers) {
//     const dividers = [];

//     if (num !== 1) {
//       for (const divider of numbers) {
//         if (num % divider === 0) {
//           if (divider !== 1 || divider !== num) {
//             dividers.push(divider);
//           }
//         }
//       }
//     }

//     if (dividers.length < 3 && num !== 1) {
//       primeNumbers.push(num);
//     }
//   };

//   // primeNumbers[0].prime-circle.color = 'orange';
//   // primeNumbers[1].prime-circle.color = 'midnightblue';
//   // primeNumbers[2].prime-circle.color = 'darkgoldenrod';
//   // primeNumbers[3].prime-circle.color = 'green';
//   // primeNumbers[4].prime-circle.color = 'purple';

// }

// primeButton.addEventListener('click', showPrimeNumbers)

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

const puppyButton = document.querySelector('#puppy-form')

function numberOfPuppies(evt) {
  evt.preventDefault();
  const puppyNum = document.querySelector('#num-puppies').value;

  fetch(`/puppies.json?num-puppies=${puppyNum}`)
  .then(response => response.json())
  .then(responseData => {showPuppies(responseData)});
}

puppyButton.addEventListener('submit', numberOfPuppies);
