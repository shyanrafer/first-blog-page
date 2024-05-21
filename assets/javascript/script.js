// could probably do the light mode and dark mode here

// First, one must set a variable connected to an html element with the following syntax - this is for the item to be clicked - in this instance, i chose a button with an id that will be consistent across my html files
const lightModeDarkMode = document.querySelector(`#dark-mode-button`);

// Next, the entirety of the page needs to be changed after the click occurs
const container = document.querySelector(`.container`);

// Next, one must setup a function that listens for a click event - to set the default display of the page to light and then switch to dark, one must use the following syntax
// Sets mode to light upon inital page load and then allows things to run smoothly thereafter
let mode = `light`; 
lightModeDarkMode.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

           
// now use the variable to add an event listener of click and run a function with the following parameters

