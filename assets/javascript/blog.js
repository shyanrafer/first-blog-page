// This page will need a header that can take one back to the form entry page but when doing so stores the display selection thus carrying it over to the previous page
// I think i will need to structure blank cards on the blot html file to append stuff to
const bodyEl = document.body
function init(){
  const blogContentArray = JSON.parse(localStorage.getItem('blogContentArray')) || []
// define function
for (let index = blogContentArray.length; index >= 0; index--) {
  const cardEl = document.createElement('card')
  const titleEl = document.createElement('h1')
  const contentEl = document.createElement('p')
  const authorEl = document.createElement('p')

  authorEl.textContent = blogContentArray[0]
  titleEl.textContent = blogContentArray[1]
  contentEl.textContent = blogContentArray[2]

  cardEl.appendChild(authorEl)
  cardEl.appendChild(titleEl)
  cardEl.appendChild(contentEl)

  cardEl.setAttribute('class', 'blog-post-card')


  
}
}
// then i need a for loop

// then call the fucntion
// first create element, then text, then append