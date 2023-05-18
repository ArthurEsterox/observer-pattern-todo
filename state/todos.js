// factory
import createPersistMiddleware from '../factory/createPersistMiddleware.js';

let instance;

class Todos {
  todos = [];

  constructor() {
    if (instance) {
      throw new Error('You can create only one instance!');
    }
    
    instance = this;

    this.todos = this.getPersistedData();
  }
 
  getInstance() {
    return this;
  }

  getTodos() {
    return this.todos;
  }
  
  setTodos(todos) {
    this.persist(() => {
      this.todos = todos;
    });
  }

  addTodo(todo) {
    this.persist(() => {
      this.todos.unshift(todo);
    });
  }

  deleteTodo(id) {
    this.persist(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    });
  }

  completeTodo(id) {
    this.persist(() => {
      const todo = this.todos.find((todo) => todo.id === id);

      todo.done = !todo.done;
    });
  }
}

const persistMiddleware = createPersistMiddleware('getTodos', 'todos');

Todos.prototype.getPersistedData = persistMiddleware.get;
Todos.prototype.persist = persistMiddleware.set;

export default new Todos();
