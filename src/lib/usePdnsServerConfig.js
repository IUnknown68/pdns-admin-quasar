import { computed } from 'vue';
import { useLocalStorage } from '@vueuse/core';

import { SERVER_CONFIG } from 'src/constants.js';

const serverConfig = useLocalStorage(SERVER_CONFIG, {
  version: 1,
  url: '/api/v1/servers',
  apiKey: '',
});

const serverConfigValid = computed(() => (serverConfig.value.url && serverConfig.value.apiKey));

//------------------------------------------------------------------------------
function usePdnsServerConfig() {
  return {
    serverConfig,
    serverConfigValid,
  };
}

export default usePdnsServerConfig;
