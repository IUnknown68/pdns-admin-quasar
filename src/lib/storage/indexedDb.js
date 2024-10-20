import {
  openDB,
} from 'idb';

let database = null;

//------------------------------------------------------------------------------
async function nextKeyCursor(state, mapper = (k) => k) {
  state.cursor = (state.cursor)
    ? await state.cursor.continue()
    : await database.transaction(state.namespace).store.openKeyCursor();
  return (state.cursor)
    ? {
      done: false,
      value: await mapper(state.cursor.key),
    }
    : {
      done: true,
    };
}

//------------------------------------------------------------------------------
async function nextCursor(state, mapper = (k, v) => v) {
  state.cursor = (state.cursor)
    ? await state.cursor.continue()
    : await database.transaction(state.namespace).store.openCursor();
  return (state.cursor)
    ? {
      done: false,
      value: await mapper(state.cursor.key, state.cursor.value),
    }
    : {
      done: true,
    };
}

//------------------------------------------------------------------------------
function makeIterator(namespace, nextFn) {
  return () => ({
    [Symbol.asyncIterator]() {
      const state = { namespace };
      return {
        next: () => nextFn(state),
      };
    },
  });
}

//------------------------------------------------------------------------------
function createStorage(namespace) {
  const storage = {
    name: 'indexedDb',

    getItem: (key) => database.get(namespace, key),
    setItem: (value) => database.put(namespace, value),
    addItem: (value) => database.add(namespace, value),
    removeItem: (key) => database.delete(namespace, key),

    keys: makeIterator(namespace, (state) => nextKeyCursor(state)),
    values: makeIterator(namespace, (state) => nextCursor(state, (key, value) => value)),
    entries: makeIterator(namespace, (state) => nextCursor(state, (key, value) => [key, value])),
  };

  Object.defineProperties(storage, {
    database: {
      get: () => database,
    },
  });

  return storage;
}

createStorage.init = async (name, version, options) => {
  database = await openDB(name, version, options);
};

export default createStorage;
