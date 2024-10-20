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
            {{$t('serverConfig.title')}}
          </div>
          <ServerConfig ref="serverConfigRef" :server-config="serverConfig" />
        </q-card-section>

        <q-card-actions
          align="right"
          class="q-px-md"
        >
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
import { defineComponent } from 'vue';
import usePdnsServerConfig from 'lib/usePdnsServerConfig';
import ServerConfig from 'components/ServerConfig.vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'SettingsPage',

  components: {
    ServerConfig,
  },

  setup() {
    const { serverConfig } = usePdnsServerConfig();

    function handleOKClick() {
    }

    function handleCancelClick() {
    }

    return {
      serverConfig,

      handleOKClick,
      handleCancelClick,
    };
  },
});
</script>
