<template>
  <q-page class="q-pa-xl">
    <div class="text-h6 q-mb-sm">RecordListPage</div>
    <div>
      <router-link
        :to="{name: 'server.edit', params: {serverId: serverId}}"
      >
        Edit this server
      </router-link>
    </div>
    <div>
      <router-link
        :to="{name: 'zone.list', params: {serverId: serverId}}"
      >
        List of zones of this server
      </router-link>
    </div>
    <div>
      <router-link
        :to="{name: 'zone.edit', params: {serverId: serverId, zoneId: zoneId}}"
      >
        Edit a zone of server
      </router-link>
    </div>
    <div>
      <router-link
        :to="{name: 'record.edit', params: {serverId: serverId, zoneId: zoneId, recordId: 0 }}"
      >
        Edit a record of a zone of server
      </router-link>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import useCurrent from 'lib/useCurrent';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'RecordListPage',

  components: {
  },

  setup() {
    const { serverId, zoneId } = useCurrent();
    return {
      serverId,
      zoneId,
    };
  },
});
</script>
