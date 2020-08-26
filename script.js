// CONTACT FORM
// Form validation

// The variables name, form and errorElement are declared and assigned here
const name = document.getElementById("name");
const formMessage = document.getElementById("form");
const errorElement = document.getElementById('error');

// User receives messages depending on their form input
/* form.addEventListener("submit", (e) => {
  let responseMessages = [];
  if (name.value === "" || name.value == null) {
    responseMessages.push("Please enter your name.");
}); */

form.addEventListener('submit', (e) => {
    let responseMessages = []

    if (formMessage.value.length <= 5){
        a.preventDefault()
        responseMessages.push('Your message must exceed 5 characters.')

    }
}
