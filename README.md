# first-blog-page
For this application, as a part of the coding bootcamp I am attending at the time of writing, we are expanding upon our lessons pertaining to API's. 

USER STORY
AS A marketing student
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences

ACCEPTANCE CRITERIA
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.

sourced 'goose.png' from https://purepng.com/photo/446/animals-goose

gathered 'Aqua Cyan' from https://www.pinterest.com/pin/50-shades-of-aqua-color-names-hex-rgb-cmyk-codes--151222499980569779/

This project was the hardest for me to grasp from the class so far. I seem to have the html and css aspect down, could still work on positioning with css, but JavaScript is an elusive beast for me. The hardest aspects of the assignment are the following:
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.

Throughout the project I ran into many bugs. Primarily with the form submit function. I couldn't figure out why when I input content the display message iterated would go directly to success even when not everything was inputted. To solve this, in a group with a couple of classmates, we hashed out ideas and deduced that the username, title, and blog post value had to be defined within the function. Initially I was attempting to gather the value with a variable defined on global scope. What ended up working was essentially telling JavaScript, "Hey, there's an element we want to lookout for - we will call it this - and later on I want to set a new variable equal to that element but let's grab the value so we can run this fuction." From there, I really struggled with storing items to local data and then gathering them as an object to later utilize. I spent a couple of days working that out. I know one needs to stringify content in order to save it to local storage. I am totally lost when it come to saving an object as a string in an array and then parsing the array to then get the string back to an object to, for lack of a better way to put it, do stuff with. 

Screenshots


