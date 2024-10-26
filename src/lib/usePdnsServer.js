import {
  shallowReactive,
  computed,
  ref,
  toValue,
} from 'vue';
import axios from 'axios';

import usePdnsServerConfig from 'lib/usePdnsServerConfig';
import useLoading, {
  STATUS_LOADING,
  STATUS_LOADED,
  STATUS_ERROR,
} from 'lib/useLoading';

// const BASE_URL = '/api/v1/servers';
// const API_KEY = '1c72e57610d341159537da85d2b10bcd';

const serverMap = shallowReactive(new Map());
const serverList = computed(() => [...serverMap.values()]);
const { status, setStatus } = useLoading();
const lastError = ref(null);

//------------------------------------------------------------------------------
async function loadServers(force = false) {
  switch (status.value) {
    case STATUS_LOADING:
      return;
    case STATUS_LOADED:
      if (!force) {
        return;
      }
      break;
    default:
      break;
  }
  try {
    setStatus(STATUS_LOADING);
    const { serverConfig } = usePdnsServerConfig();
    lastError.value = null;
    const response = await axios.get(serverConfig.value.url, {
      headers: {
        'X-API-Key': serverConfig.value.apiKey,
      },
    });

    serverMap.clear();
    for (const server of response.data) {
      serverMap.set(server.id, ref(server));
    }
    setStatus(STATUS_LOADED);
  } catch (error) {
    setStatus(STATUS_ERROR);
    lastError.value = error;
  }
}

//------------------------------------------------------------------------------
function getServer(serverId) {
  return serverMap.get(toValue(serverId));
}

//------------------------------------------------------------------------------
function usePdnsServer() {
  return {
    servers: serverList,
    status,
    lastError,
    loadServers,
    getServer,
  };
}

export default usePdnsServer;
