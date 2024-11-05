<template>
  <router-view v-if="app.loaded" />
  <BootLayout v-else />
  <NavigationErrorDialog />
</template>

<script>
import {
  defineComponent,
} from 'vue';
import {
  useQuasar,
} from 'quasar';
import { useLocalStorage } from '@vueuse/core';

import useApp from 'lib/useApp';
import useAppTitle from 'lib/useAppTitle';
import BootLayout from 'layouts/BootLayout.vue';
import NavigationErrorDialog from 'components/NavigationErrorDialog.vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'App',

  components: {
    BootLayout,
    NavigationErrorDialog,
  },

  setup() {
    const darkmode = useLocalStorage('darkmode', false);
    const app = useApp();
    useAppTitle();

    useQuasar().dark.set(darkmode.value);

    return {
      app,
    };
  },
});
</script>
