import axios from 'axios';

import useServerConfig from 'domain/server/useServerConfig';
import useAsStore from 'lib/useAsStore';

//------------------------------------------------------------------------------
const useServer = useAsStore(async (/*params, currentStatus, statusRequired */) => {
  const { serverConfig } = useServerConfig();
  const response = await axios.get(serverConfig.value.url, {
    headers: {
      'X-API-Key': serverConfig.value.apiKey,
    },
  });
  return response.data;
});

export default useServer;
