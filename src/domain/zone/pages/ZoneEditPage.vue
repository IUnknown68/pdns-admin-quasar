<template>
  <q-page class="q-pa-xl">
    <div class="text-h6 q-mb-sm">ZoneEditPage</div>
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
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import useRouteParams from 'lib/useRouteParams';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'ZoneEditPage',

  components: {
  },

  setup() {
    const [serverId] = useRouteParams('serverId');
    return {
      serverId,
    };
  },
});
</script>
