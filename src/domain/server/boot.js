import useServerConfig from './useServerConfig';
import { doModal } from './components/ServerConfigDialog.vue';

//------------------------------------------------------------------------------
async function boot() {
  const { serverConfigValid } = useServerConfig();

  while (!serverConfigValid.value) {
    await doModal(false);
  }
}

export default boot;
