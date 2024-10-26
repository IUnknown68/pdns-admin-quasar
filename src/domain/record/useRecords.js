import {
  toValue,
} from 'vue';
import axios from 'axios';

import useServerConfig from 'domain/server/useServerConfig';
import useAsStore from 'lib/useAsStore';

//------------------------------------------------------------------------------
const useRecords = useAsStore(async ({ serverId, zoneId }) => {
  const { serverConfig } = useServerConfig();
  const response = await axios.get(`${serverConfig.value.url}/${toValue(serverId)}/zones/${toValue(zoneId)}`, {
    headers: {
      'X-API-Key': serverConfig.value.apiKey,
    },
  });
  return response.data.rrsets;
});

export default useRecords;
