import {
  reactive,
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

const zoneMap = reactive(new Map());
const zoneList = computed(() => [...zoneMap.values()]);
const { status, setStatus } = useLoading();
const lastError = ref(null);

//------------------------------------------------------------------------------
async function loadZones(serverId, force = false) {
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
    const response = await axios.get(`${serverConfig.value.url}/${toValue(serverId)}/zones`, {
      // timeout: 2000,
      headers: {
        'X-API-Key': serverConfig.value.apiKey,
      },
    });

    zoneMap.clear();
    for (const zone of response.data) {
      zoneMap.set(zone.id, zone);
    }
    setStatus(STATUS_LOADED);
  } catch (error) {
    setStatus(STATUS_ERROR);
    lastError.value = error;
  }
}

//------------------------------------------------------------------------------
async function getZone(id) {
  return zoneMap.get(id);
}

//------------------------------------------------------------------------------
function usePdnsZones() {
  return {
    zones: zoneList,
    status,
    lastError,
    loadZones,
    getZone,
  };
}

export default usePdnsZones;
