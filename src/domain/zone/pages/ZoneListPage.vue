<template>
  <q-page class="q-pa-md">
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
          @click="reload"
        />
      </template>
    </q-banner>

    <ZoneList
      v-else-if="server"
      :serverId="server.id"
      :rows="zones"
      :loading="loading"
      :title="`${$t('server.title')}: ${server.id}`"
    />
  </q-page>
</template>

<script>
import {
  defineComponent,
  computed,
  watch,
  onMounted,
  toValue,
} from 'vue';

import useRouteParams from 'lib/useRouteParams';
import { STATUS_LOADING } from 'lib/useLoading';
import useServer from 'domain/server/useServer';

import useZones from '../useZones';
import ZoneList from '../components/ZoneList.vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'ZoneListPage',

  components: {
    ZoneList,
  },

  setup() {
    const [serverId] = useRouteParams('serverId');
    const { getItem: getServer } = useServer();
    const server = computed(() => getServer(serverId));
    const {
      items: zones,
      loadItems: loadZones,
      lastError,
      status,
    } = useZones();

    function reload() {
      loadZones({ serverId: toValue(serverId) });
    }
    const loading = computed(() => status.value === STATUS_LOADING);

    watch(serverId, reload);
    onMounted(reload);

    return {
      lastError,
      server,
      zones,
      loading,
      reload,
    };
  },
});
</script>
