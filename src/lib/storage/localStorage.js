//------------------------------------------------------------------------------
function createStorage(namespace, options = {}) {
  const DB_PREFIX = `${namespace}:`;

  const serialize = (typeof options.serialize === 'function')
    ? options.serialize
    : JSON.stringify;

  const unserialize = (typeof options.unserialize === 'function')
    ? options.unserialize
    : JSON.parse;

  //------------------------------------------------------------------------------
  function getItem(key) {
    const s = localStorage.getItem(`${DB_PREFIX}${key}`);
    return s ? unserialize(s) : null;
  }

  //------------------------------------------------------------------------------
  function setItem(key, value) {
    localStorage.setItem(`${DB_PREFIX}${key}`, serialize(value));
  }

  //------------------------------------------------------------------------------
  function removeItem(key) {
    localStorage.removeItem(`${DB_PREFIX}${key}`);
  }

  //------------------------------------------------------------------------------
  function nextKey(state, mapper = (v) => v) {
    for (; state.index < localStorage.length; ++state.index) {
      const key = localStorage.key(state.index);
      if (key.startsWith(`${DB_PREFIX}`)) {
        ++state.index;
        return {
          done: false,
          value: mapper(key.slice(DB_PREFIX.length)),
        };
      }
    }
    return { done: true };
  }

  //------------------------------------------------------------------------------
  function keys() {
    return {
      [Symbol.iterator]() {
        const state = {
          index: 0,
        };
        return {
          next() {
            return nextKey(state);
          },
        };
      },
    };
  }

  //------------------------------------------------------------------------------
  function values() {
    return {
      [Symbol.iterator]() {
        const state = {
          index: 0,
        };
        return {
          next() {
            return nextKey(state, (key) => getItem(key));
          },
        };
      },
    };
  }

  //------------------------------------------------------------------------------
  function entries() {
    return {
      [Symbol.iterator]() {
        const state = {
          index: 0,
        };
        return {
          next() {
            return nextKey(state, (key) => [key, getItem(key)]);
          },
        };
      },
    };
  }

  return {
    name: 'localStorage',

    getItem,
    setItem,
    removeItem,

    keys,
    values,
    entries,
  };
}

export default createStorage;
