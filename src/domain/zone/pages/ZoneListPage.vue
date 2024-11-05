<template>
  <q-page class="q-pa-md">
    <ZoneList
      :serverId="serverId"
      :rows="zones"
      :title="`${$t('server.title')}: ${serverId}`"
    />
  </q-page>
</template>

<script>
import {
  defineComponent,
} from 'vue';

import useRouteParams from 'lib/useRouteParams';

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
    const {
      items: zones,
    } = useZones();

    return {
      serverId,
      zones,
    };
  },
});
</script>
