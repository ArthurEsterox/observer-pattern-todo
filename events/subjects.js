import Subject from '../utils/subject.js';

export class RenderTodos extends Subject {
  static handlers = [];
}

export class AddTodo extends Subject {
  static handlers = [];
}

export class DeleteTodo extends Subject {
  static handlers = [];
}

export class CompleteTodo extends Subject {
  static handlers = [];
}
