<template>
  <q-layout view="hHh lpr fFf">
    <q-page-container>
      <q-page class="flex flex-center">
        <q-banner v-if="app.error" class="text-white bg-red">
          {{$t(message)}}
          <template v-slot:action>
            <q-btn
              flat
              color="white"
              :label="$t('tryAgain')"
              @click="boot"
            />
          </template>
        </q-banner>

        <div v-else class="q-pa-md">
          <q-spinner
            color="primary"
            size="10em"
          />
          <div class="text-h6 q-pt-sm">
            {{message}}
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {
  defineComponent,
  computed,
  onMounted,
} from 'vue';
import { useI18n } from 'vue-i18n';

import useApp from 'lib/useApp';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'BootLayout',

  setup() {
    const app = useApp();
    const { t } = useI18n();
    const message = computed(() => (
      app.error ? app.error.message : t('message.loadingData')));

    async function boot() {
      try {
        app.error = null;
        await app.load();
        app.loaded = true;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('BOOT', err);
        app.error = err;
        app.loaded = false;
      }
    }

    onMounted(boot);

    return {
      app,
      message,

      boot,
    };
  },
});
</script>
