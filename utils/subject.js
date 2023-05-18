class Subject {
  static subscribe(fn) {
    this.handlers.push(fn);
  }

  static unsubscribe(fn) {
    this.handlers = this.handlers.filter((item) => {
      if (item !== fn) {
        return item;
      }
    });
  }

  static fire(o, thisObj) {
    const scope = thisObj || window;
    
    this.handlers.forEach((item) => {
      item.call(scope, o);
    });
  }
}

export default Subject;
