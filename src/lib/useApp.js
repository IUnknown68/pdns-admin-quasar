import useReactive from 'lib/useReactive';
import usePdnsServer from 'lib/usePdnsServer';
import usePdnsServerConfig from 'lib/usePdnsServerConfig';
import { doModal } from 'components/ServerConfigDialog.vue';

/* eslint-disable no-console */
const APP_DEFAULTS = {
  loaded: false,
  error: null,
  load: async () => {
    const { serverConfigValid } = usePdnsServerConfig();
    const { loadServers } = usePdnsServer();

    while (!serverConfigValid.value) {
      await doModal(false);
    }
    await loadServers();
  },
};

export default () => useReactive('app', APP_DEFAULTS);
