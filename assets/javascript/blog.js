// This page will need a header that can take one back to the form entry page but when doing so stores the display selection thus carrying it over to the previous page
// I think i will need to structure blank cards on the blog html file to append stuff to

// then i need a for loop

// then call the fucntion
// first create element, then text, then append
const blogContent = JSON.parse(localStorage.getItem('blogPosts'))


const homeBtn = document.querySelector('.back-button')

homeBtn.addEventListener('click', function (event) {
  event.preventDefault();
  backToHome();
})
// call the following functin in the homepage button
function backToHome() {
   window.location.href = 'index.html'
   return false
  //  return false prevents default behavior of the broswer ie reloading
}