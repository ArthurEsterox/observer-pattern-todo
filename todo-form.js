// subjects
import { RenderTodos, AddTodo } from './events/subjects.js';

// factory
import createTodo from './factory/createTodo.js';

// elements
const todoForm = document.querySelector('.todo-form');
const todoFormNameInput = document.querySelector('.todo-form__name');

// listeners
todoForm.addEventListener('submit', handleTodoFormSubmit);

// listener functions
function handleTodoFormSubmit(e) {
  e.preventDefault();

  const name = todoFormNameInput.value.trim();

  if (name) {
    AddTodo.fire(createTodo(name));
    RenderTodos.fire();
    
    todoFormNameInput.value = '';
  }
}
