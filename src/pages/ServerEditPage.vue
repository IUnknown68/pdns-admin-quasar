<template>
  <q-page class="q-pa-xl">
    <div class="text-h6 q-mb-sm">
      Edit Server {{server.id}}
    </div>
    <div>
      <router-link
        :to="{name: 'zone.list', params: {serverId: server.id}}"
      >
        List of zones of this server.
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
import usePdnsServer from 'lib/usePdnsServer';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'ServerEditPage',

  components: {
  },

  setup() {
    const { getItem: getServer } = usePdnsServer();
    const [serverId] = useRouteParams('serverId');
    const server = computed(() => getServer(serverId));

    return {
      server,
    };
  },
});
</script>
