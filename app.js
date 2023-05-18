// components
import TodoItem from './components/todo-item.js';

// subjects
import { RenderTodos, AddTodo, DeleteTodo, CompleteTodo } from './events/subjects.js';

// observers
import { renderTodos, addTodo, deleteTodo, completeTodo } from './events/observers.js';

const app = {
  init() {
    // define components
    customElements.define('todo-item', TodoItem);

    // initialize observers
    RenderTodos.subscribe(renderTodos);
    AddTodo.subscribe(addTodo);
    DeleteTodo.subscribe(deleteTodo);
    CompleteTodo.subscribe(completeTodo);
  },
};

export default app;