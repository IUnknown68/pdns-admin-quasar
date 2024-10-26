import {
  toValue,
} from 'vue';
import axios from 'axios';

import usePdnsServerConfig from 'lib/usePdnsServerConfig';
import useAsStore from 'lib/useAsStore';

const usePdnsZones = useAsStore(async ({ serverId } /*, currentStatus, statusRequired */) => {
  const { serverConfig } = usePdnsServerConfig();
  const response = await axios.get(`${serverConfig.value.url}/${toValue(serverId)}/zones`, {
    headers: {
      'X-API-Key': serverConfig.value.apiKey,
    },
  });
  return response.data;
});

export default usePdnsZones;
