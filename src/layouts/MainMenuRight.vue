<template>
  <q-btn
    dense
    flat
    round
    icon="more_vert"
  >
    <q-menu
      anchor="bottom end"
      self="top end"
    >
      <q-item>
        <q-toggle
          v-model="darkmode"
          v-close-popup
          :label="$t('menu.darkMode')"
        />
      </q-item>
      <SelectLocale clickable />
      <q-item :to="{name:'about'}">
        <q-item-section avatar>
          <q-icon name="sym_o_info" />
        </q-item-section>
        <q-item-section>
          {{$t('about.title')}}
        </q-item-section>
      </q-item>
    </q-menu>
  </q-btn>
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

import SelectLocale from 'components/SelectLocale.vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'MainMenuRight',

  components: {
    SelectLocale,
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
