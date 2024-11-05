<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-md">{{$t('server.title')}}</div>
    <div class="flex justify-center items-start">
      <div class="container-520">
        <ServerList
          v-if="servers.length"
          flat
          bordered
          :servers="servers"
        />
        <q-banner v-else rounded class="bg-orange text-white">
          {{$t('servers.noneFound')}}
        </q-banner>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

import useServer from '../useServer';
import ServerList from '../components/ServerList.vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'ServerListPage',

  components: {
    ServerList,
  },

  setup() {
    const { items: servers, lastError, loadItems: loadServers } = useServer();
    return {
      servers,
      lastError,
      loadServers,
    };
  },
});
</script>
