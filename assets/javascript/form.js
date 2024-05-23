// this form will need to gather the inputted data and then push it into the blog page. I think new elements will also have to be added per post. That will require appending and styling i belive.
// Will also need to include a return of incomplete if the user doesnt fill out all the input boxes for the blog entry form
const formSubmitButton = document.querySelector(`#form-submit-button`)
const formDisplayMessage = document.querySelector(`#display-message`)
let usernameEl = document.querySelector(`#username`)
let titleEl = document.querySelector(`#form-title`)
let blogPostEl = document.querySelector(`#post-content`)
// method is a 'preprogrammed' function

function displayMessage(type, message) {
  formDisplayMessage.textContent = message;
  formDisplayMessage.setAttribute('class', type);
}
// must add .value otherwise the selection will refelect the whole element instead of just the value inputted
// .trim removes space before and after input
formSubmitButton.addEventListener('click', function (event) {
  event.preventDefault();
  const username = usernameEl.value.trim()
  const title = titleEl.value.trim()
  const blogPost =  blogPostEl.value.trim()       
  
  if (username === '') {
    displayMessage('error', 'Name cannot be blank');
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else if (blogPost === '') {
    displayMessage('error', 'Blog post cannot be blank');
  } else {
    displayMessage('success', 'Your post has been saved');
  }
  
  // will want to make into array and then push values into array
  // getItem - to access local storage - make array instead of obj to push obj into existing array - or can make a new array then push 
  // parse to unstringify
  const blogContentArray = JSON.parse(localStorage.getItem("blogPosts")) || []
  
  const blogContent = {
  name: username,
  title: title,
  blogPost: blogPost
  }

  blogContentArray.push(blogContent)
  // on blog page - read (get) local storage - then can create a for loop to create elements for card
  localStorage.setItem("blogPosts", JSON.stringify(blogContentArray));

  
});  

// thoughts out loud (tyoed out).. when we click submit on the form the info provided should be collected into an array and that array stored in local storage. to do this, I think i need an empty array, set that equal to the value of blogContent, then save the array (stringified) into local storage. I set the key for the blog post, so far, as blogContent. 
