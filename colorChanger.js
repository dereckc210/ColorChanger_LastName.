let button = document.querySelector("colorButton");
let box = document.querySelector("colorBox");

document.addEventListener('DOMContentLoaded', function() {
  const myButton = document.getElementById('myButton');

  if (myButton) {
    myButton.addEventListener('click', function() {
      // Your event handling code here
    });
  } else {
    console.error("Element with ID 'myButton' not found.");
  }
});
