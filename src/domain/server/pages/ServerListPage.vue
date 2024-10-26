<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-md">{{$t('servers.title')}}</div>
    <q-banner
      v-if="lastError"
      rounded
      inline-actions
      class="bg-red text-white"
    >
      <template v-slot:avatar>
        <q-icon name="cancel" color="white" />
      </template>
      {{lastError.message}}
      <template v-slot:action>
        <q-btn
          flat
          color="white"
          :label="$t('button.retry')"
          @click="loadServers"
        />
      </template>
    </q-banner>

    <div v-else class="flex justify-center items-start">
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
