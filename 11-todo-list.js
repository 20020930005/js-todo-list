// Initialize todoList from local storage or as an empty array
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Initial rendering
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject; // Destructuring for simplicity

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        saveToLocalStorage();
        renderTodoList();
      " class="delete-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  // Add new todo item
  todoList.push({ name, dueDate });

  // Save updated list to local storage
  saveToLocalStorage();

  // Clear input fields
  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}

function saveToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
