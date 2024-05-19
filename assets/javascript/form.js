// this form will need to gather the inputted data and then push it into the blog page. I think new elements will also have to be added per post. That will require appending and styling i belive.
// Will also need to include a return of incomplete if the user doesnt fill out all the input boxes for the blog entry form
const formSubmitButton = document.querySelector(`#form-submit-button`)
const formDisplayMessage = document.querySelector(`#display-message`)

function displayMessage(type, message) {
  formDisplayMessage.textContent = message;
  formDisplayMessage.setAttribute('class', type);
}

formSubmitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const name = document.querySelector(`#name`).value
  const title = document.querySelector(`#form-title`).value
  const blogPost = document.querySelector(`#post-content`).value

  if (name === '') {
    displayMessage('error', 'Name cannot be blank');
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank');
  } else if (blogPost === '') {
    displayMessage('error', 'Blog post cannot be blank');
  } else {
    displayMessage(`success`, `Your post has been saved`)
  }



    // TODO: Save email and password to localStorage and render the last registered user
    localStorage.setItem(`name`, name);
    localStorage.setItem(`title`, title);
    localStorage.setItem(`blog-post`, blogPost);
}) 