import {
  toValue,
} from 'vue';
import axios from 'axios';

import useServerConfig from 'domain/server/useServerConfig';
import useAsStore from 'lib/useAsStore';

//------------------------------------------------------------------------------
const useZones = useAsStore(async ({ serverId } /*, currentStatus, statusRequired */) => {
  const { serverConfig } = useServerConfig();
  const response = await axios.get(`${serverConfig.value.url}/${toValue(serverId)}/zones`, {
    headers: {
      'X-API-Key': serverConfig.value.apiKey,
    },
  });
  return response.data;
});

export default useZones;
