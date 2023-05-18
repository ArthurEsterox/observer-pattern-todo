function createPersistMiddleware(getItemsKey, storageKey) {
  return {
    get: function() {
      const initialValue = this[getItemsKey]();
      
      try {
        const data = localStorage.getItem(storageKey);

        if (!data) {
          return initialValue;
        }

        const parsed = JSON.parse(data);

        if (!parsed) {
          return initialValue;
        }

        return parsed;
      } catch (e) {
        console.error(e, 'can\'t get persisted data');
        return initialValue;
      }
    },
    set: function(fn) {
      const result = fn();
  
      try {
        localStorage.setItem(
          storageKey,
          JSON.stringify(this[getItemsKey]()),
        );
      } catch (e) {
        console.error(e, 'can\'t persist');
      }
  
      return result;
    },
  };
}

export default createPersistMiddleware;
