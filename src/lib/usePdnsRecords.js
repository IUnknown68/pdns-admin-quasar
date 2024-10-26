import {
  toValue,
} from 'vue';
import axios from 'axios';

import usePdnsServerConfig from 'lib/usePdnsServerConfig';
import useAsStore from 'lib/useAsStore';

const usePdnsRecords = useAsStore(async ({ serverId, zoneId }) => {
  const { serverConfig } = usePdnsServerConfig();
  const response = await axios.get(`${serverConfig.value.url}/${toValue(serverId)}/zones/${toValue(zoneId)}`, {
    headers: {
      'X-API-Key': serverConfig.value.apiKey,
    },
  });
  return response.data.rrsets;
});

export default usePdnsRecords;
