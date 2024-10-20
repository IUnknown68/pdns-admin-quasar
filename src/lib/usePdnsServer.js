import { shallowReactive, computed, ref } from 'vue';
import axios from 'axios';

const BASE_URL = '/api/v1/servers';
const API_KEY = '1c72e57610d341159537da85d2b10bcd';

const serverMap = shallowReactive(new Map());
const serverList = computed(() => [...serverMap.values()]);
const lastError = ref(null);

//------------------------------------------------------------------------------
async function loadServers() {
  try {
    lastError.value = null;
    const response = await axios.get(BASE_URL, {
      headers: {
        'X-API-Key': API_KEY,
      },
    });

    serverMap.clear();
    for (const server of response.data) {
      serverMap.set(server.id, ref(server));
    }
  } catch (error) {
    lastError.value = error;
  }
}

//------------------------------------------------------------------------------
async function getServer(id) {
  return serverMap.get(id);
}

//------------------------------------------------------------------------------
function usePdnsServer() {
  return {
    servers: serverList,
    lastError,
    loadServers,
    getServer,
  };
}

export default usePdnsServer;
