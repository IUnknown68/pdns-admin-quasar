import useServer from './useServer';
import useServerConfig from './useServerConfig';
import { doModal } from './components/ServerConfigDialog.vue';

//------------------------------------------------------------------------------
async function boot() {
  const { serverConfigValid } = useServerConfig();
  const { loadItems: loadServers } = useServer();

  while (!serverConfigValid.value) {
    await doModal(false);
  }
  await loadServers();
}

export default boot;
