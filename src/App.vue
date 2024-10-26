<template>
  <router-view v-if="app.loaded" />
  <BootLayout v-else />
</template>

<script>
import {
  defineComponent,
  ref,
  watch,
} from 'vue';
import {
  useQuasar,
  useMeta,
} from 'quasar';
import { useRoute } from 'vue-router';
import { useLocalStorage } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

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
    const { t } = useI18n();
    const title = ref('Some title');
    const route = useRoute();

    useMeta(() => ({
      title: title.value,
    }));

    useQuasar().dark.set(darkmode.value);

    watch(route, () => {
      if (route.meta.title) {
        title.value = t(route.meta.title);
      } else {
        title.value = 'TITLE';
      }
    });

    return {
      app,
    };
  },
});
</script>
