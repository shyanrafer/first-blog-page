// this form will need to gather the inputted data and then push it into the blog page. I think new elements will also have to be added per post. That will require appending and styling i belive.
// Will also need to include a return of incomplete if the user doesnt fill out all the input boxes for the blog entry form
const formSubmitButton = document.querySelector(`#form-submit-button`)
const formDisplayMessage = document.querySelector(`#display-message`)
const username = document.querySelector(`#username`).value.trim()
const title = document.querySelector(`#form-title`).value
const blogPost = document.querySelector(`#post-content`).value
// method is a 'preprogrammed' function

function displayMessage(type, message) {
  formDisplayMessage.textContent = message;
  formDisplayMessage.setAttribute('class', type);
}
// must add .value otherwise ...
formSubmitButton.addEventListener('click', function (event) {
  event.preventDefault();
  if (username === '') {
    displayMessage('error', 'Name cannot be blank');
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else if (blogPost === '') {
    displayMessage('error', 'Blog post cannot be blank');
  } else {
    displayMessage('success', 'Your post has been saved');
  }
  const blogContent = {
  name: username,
  title: title,
  blogPost: blogPost
  }
  
  const stuffInStorage = JSON.parse(localStorage.getItem("blogContent"))||[]
  console.log(stuffInStorage)
  // will want to make into array and then push values into array
  // getItem - to access local storage - make array instead of obj to push obj into existing array - or can make a new array then push 
  // on blog page - read (get) local storage - then can create a for loop to create elements for card
  // parse to unstringify
  localStorage.setItem("blogContent", JSON.stringify(blogContent));
});  
