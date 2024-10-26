import axios from 'axios';

import usePdnsServerConfig from 'lib/usePdnsServerConfig';
import useAsStore from 'lib/useAsStore';

const usePdnsServer = useAsStore(async (/*params, currentStatus, statusRequired */) => {
  const { serverConfig } = usePdnsServerConfig();
  const response = await axios.get(serverConfig.value.url, {
    headers: {
      'X-API-Key': serverConfig.value.apiKey,
    },
  });
  return response.data;
});

export default usePdnsServer;
