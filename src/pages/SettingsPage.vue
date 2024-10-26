<template>
  <q-page class="q-pa-md flex justify-center items-start">
    <q-card
      bordered
      flat
      class="container-520"
    >
      <q-form @submit="handleOKClick">
        <q-card-section>
          <div class="q-pb-sm text-h6">
            {{$t('server.serverConfig.title')}}
          </div>
          <ServerConfig ref="serverConfigRef" :server-config="serverConfig" />
        </q-card-section>

        <q-card-actions
          align="right"
          class="q-px-md gap-md"
        >
          <BannerNotification
            ref="bannerRef"
            rounded dense class="bg-positive text-white"
          >
            {{$t('message.settingsSaved')}}
          </BannerNotification>
          <q-btn
            outline
            color="primary"
            type="submit"
            :label="$t('button.save')"
            @click="handleOKClick"
            class="flex-basis-100"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

import useServerConfig from 'domain/server/useServerConfig';
import useServer from 'domain/server/useServer';
import ServerConfig from 'domain/server/components/ServerConfig.vue';

import BannerNotification from 'components/BannerNotification.vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'SettingsPage',

  components: {
    ServerConfig,
    BannerNotification,
  },

  setup() {
    const { serverConfig } = useServerConfig();
    const { loadItems: loadServers } = useServer();
    const serverConfigRef = ref();
    const bannerRef = ref();

    function handleOKClick() {
      const modified = serverConfigRef.value.collect(serverConfig.value);
      bannerRef.value?.show();
      if (modified) {
        loadServers();
      }
    }

    return {
      serverConfig,
      serverConfigRef,
      bannerRef,

      handleOKClick,
    };
  },
});
</script>
