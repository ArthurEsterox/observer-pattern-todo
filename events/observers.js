// state
import todos from '../state/todos.js';

export function renderTodos() {
  const todoList = document.querySelector('.todo-list');
  const items = todos.getTodos();

  todoList.innerHTML = '';

  items.forEach((todo) => {
    const element = document.createElement('todo-item');
    element.setAttribute('id', todo.id);
    element.setAttribute('done', todo.done);

    const slot = document.createElement('slot');
    slot.innerText = todo.name;

    element.appendChild(slot);

    todoList.appendChild(element);
  });
}

export function addTodo(item) {
  todos.addTodo(item);
}

export function deleteTodo(id) {
  todos.deleteTodo(id);
}

export function completeTodo(id) {
  todos.completeTodo(id);
}
