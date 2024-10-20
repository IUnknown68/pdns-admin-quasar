<template>
  <router-view v-if="app.loaded" />
  <BootLayout v-else />
</template>

<script>
import { defineComponent } from 'vue';
import {
  useQuasar,
} from 'quasar';
import { useLocalStorage } from '@vueuse/core';

import useApp from 'lib/useApp';
import BootLayout from 'layouts/BootLayout.vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'App',

  components: {
    BootLayout,
  },

  setup() {
    const app = useApp();
    const darkmode = useLocalStorage('darkmode', false);

    useQuasar().dark.set(darkmode.value);

    return {
      app,
    };
  },
});
</script>
