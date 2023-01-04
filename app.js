/* Imports */
const nameInput = document.getElementById('name-input');
const submitButton = document.getElementById('submit-button');
const nameDisplay = document.getElementById('name-display');

/* Get DOM Elements */

/* State */

/* Events */
submitButton.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
}
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
