function createTodo(name, done = false) {
  return {
    id: Math.random().toString(),
    name,
    done,
  };
}

export default createTodo;
