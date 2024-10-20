import useReactive from 'lib/useReactive';

//import createStorage from 'lib/storage';
//
//
//const DB_OPTIONS = {
//  async upgrade(/*...args*/) {
//    // Upgrade stores
//  },
//};
//
//const DB_NAME = 'audiobooks';
//const DB_VERSION = 1;

// eslint-disable-next-line no-promise-executor-return
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/* eslint-disable no-console */
const APP_DEFAULTS = {
  loaded: false,
  error: null,
  load: async () => {
    await delay(1000);

    // if (typeof createStorage.init === 'function') {
    //   console.log('Init DB...');
    //   await createStorage.init(DB_NAME, DB_VERSION, DB_OPTIONS);
    //   console.log('OK.');
    // }

    //console.log('Loading books...');
    //const { loadAllBooks } = useBooks();
    //await loadAllBooks();
    //console.log('OK.');
  },
};

export default () => useReactive('app', APP_DEFAULTS);
