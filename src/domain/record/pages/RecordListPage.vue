<template>
  <q-page class="q-pa-xl">
    <div class="text-h6 q-mb-sm">
      List records of Zone {{zone.id}} of Server {{server.id}}
    </div>
    <div class="text-h6 q-mb-sm">RecordListPage</div>
    <div>
      <router-link
        :to="{name: 'server.edit', params: {serverId: server.id}}"
      >
        Edit this server
      </router-link>
    </div>
    <div>
      <router-link
        :to="{name: 'zone.list', params: {serverId: server.id}}"
      >
        List of zones of this server
      </router-link>
    </div>
    <div>
      <router-link
        :to="{name: 'zone.edit', params: {serverId: server.id, zoneId: zone.id}}"
      >
        Edit a zone of server
      </router-link>
    </div>
    <div>
      <router-link
        :to="{name: 'record.edit', params: {serverId: server.id, zoneId: zone.id, recordId: 0 }}"
      >
        Edit a record of a zone of server
      </router-link>
    </div>
  </q-page>
</template>

<script>
import {
  defineComponent,
  computed,
} from 'vue';
import useRouteParams from 'lib/useRouteParams';
import useServer from 'domain/server/useServer';
import useZones from 'domain/zone/useZones';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'RecordListPage',

  components: {
  },

  setup() {
    const { getItem: getServer } = useServer();
    const { getItem: getZone } = useZones();
    const [serverId, zoneId] = useRouteParams('serverId', 'zoneId');
    const server = computed(() => getServer(serverId));
    const zone = computed(() => getZone(zoneId));

    return {
      server,
      zone,
    };
  },
});
</script>
