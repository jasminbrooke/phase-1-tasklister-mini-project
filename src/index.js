document.addEventListener("DOMContentLoaded", () => {
  let userInput = document.getElementById("new-task-description")
  let button = document.querySelector('input[type=submit]')
  let tasklist = document.getElementById("tasks")
  button.addEventListener("click", (e) =>{
    e.preventDefault()
    if(userInput.value) {
      let li = document.createElement('li')
      li.textContent = userInput.value
      tasklist.appendChild(li)
    }
    userInput.value = ''
  })
});
