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
      :rows="zones"
      :loading="loading"
      :title="`${$t('label.server')}: ${server.value.id}`"
    />
  </q-page>
</template>

<script>
import {
  defineComponent,
  computed,
  watch,
  onMounted,
} from 'vue';
import ZoneList from 'components/ZoneList.vue';

import usePdnsServer from 'lib/usePdnsServer';
import usePdnsZones from 'lib/usePdnsZones';
import useCurrent from 'lib/useCurrent';
import { STATUS_LOADING } from 'lib/useLoading';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'ZoneListPage',

  components: {
    ZoneList,
  },

  setup() {
    const { serverId } = useCurrent();
    const { getServer } = usePdnsServer();
    const server = computed(() => getServer(serverId));
    const {
      zones,
      loadZones,
      lastError,
      status,
    } = usePdnsZones();

    function reload() {
      loadZones(serverId);
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
