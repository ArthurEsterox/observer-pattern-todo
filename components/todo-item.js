// subjects
import { DeleteTodo, RenderTodos, CompleteTodo } from '../events/subjects.js';

const template = document.createElement('template');

template.innerHTML = `
  <style>
    .todo {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .todo-actions {
      margin-left: 20px;
    }
  </style>
  <div class="todo">
    <div>
      <input class="todo-checkbox" type="checkbox" />
      <slot></slot>
    </div>

    <div class="todo-actions">
      <button class="todo-delete">Delete</button>
    </div>
  </div>
`;

class TodoItem extends HTMLElement {
  todoId = null;
  done = false;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.append(template.content.cloneNode(true));

    const checkbox = shadow.querySelector('.todo-checkbox');
    const deleteButton = shadow.querySelector('.todo-delete');

    this.addEventListener('initialize:done', this.handleInitializeDone.bind(this));
    checkbox.addEventListener('click', this.handleComplete.bind(this));
    deleteButton.addEventListener('click', this.handleDelete.bind(this));
  }

  handleInitializeDone() {
    const checkbox = this.shadowRoot.querySelector('.todo-checkbox');

    if (this.done) {
      checkbox.setAttribute('checked', this.done);
    } else {
      checkbox.removeAttribute('checked');
    }
  }

  handleDelete() {
    DeleteTodo.fire(this.todoId);
    RenderTodos.fire();
  }

  handleComplete() {
    CompleteTodo.fire(this.todoId);
    RenderTodos.fire();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'id') {
      this.todoId = newValue;
    } else if (name === 'done') {
      this.done = newValue === 'true' ? true : false;
      this.dispatchEvent(new CustomEvent('initialize:done'));
    }
  }

  static get observedAttributes() {
    return ['id', 'done'];
  }
}

export default TodoItem;
