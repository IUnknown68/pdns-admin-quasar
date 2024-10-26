<template>
  <q-page class="q-pa-xl">
    <div class="text-h6 q-mb-sm">ServerEditPage</div>
    <div>
      <router-link
        :to="{name: 'zone.list', params: {serverId: serverId}}"
      >
        List of zones of this server.
      </router-link>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import useCurrent from 'lib/useCurrent';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'ServerEditPage',

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
