import useReactive from 'lib/useReactive';

import bootServer from 'domain/server/boot';
import bootZone from 'domain/zone/boot';
import bootRecord from 'domain/record/boot';

//------------------------------------------------------------------------------
const APP_DEFAULTS = {
  loaded: false,
  error: null,
  load: async () => {
    await bootServer();
    await bootZone();
    await bootRecord();
  },
};

export default () => useReactive('app', APP_DEFAULTS);
