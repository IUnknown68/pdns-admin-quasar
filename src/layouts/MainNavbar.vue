<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="$t('label.menu')"
      @click="$emit('toggleLeftDrawer')"
    />
    <q-toolbar-title>
      {{$t('appTitle')}}
    </q-toolbar-title>
    <MainMenuRight />
  </q-toolbar>
</template>

<script>
import {
  defineComponent,
  watch,
} from 'vue';
import { useQuasar } from 'quasar';
import {
  useTitle,
  useLocalStorage,
} from '@vueuse/core';
import { useI18n } from 'vue-i18n';

import MainMenuRight from './MainMenuRight.vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'MainNavbar',

  components: {
    MainMenuRight,
  },

  setup() {
    const { t } = useI18n();
    const darkmode = useLocalStorage('darkmode', false);
    const title = useTitle();
    const q = useQuasar();

    // eslint-disable-next-line no-multi-assign
    const appTitle = title.value = t('appTitle');

    watch(darkmode, () => {
      q.dark.set(darkmode.value);
    });

    return {
      darkmode,
      appTitle,
      title,
    };
  },
});
</script>
