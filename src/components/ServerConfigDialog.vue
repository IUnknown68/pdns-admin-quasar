<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-form @submit="handleOKClick">
        <q-card-section>
          <div class="q-pb-sm text-h6">
            {{$t('serverConfig.title')}}
          </div>
          <ServerConfig ref="serverConfigRef" :server-config="serverConfig" />
        </q-card-section>

        <q-card-actions
          :align="dismissable ? 'between' : 'right'"
          class="q-px-md"
        >
          <q-btn
            v-if="dismissable"
            flat
            label="$t('button.cancel')"
            @click="handleCancelClick"
            class="flex-basis-100"
          />
          <q-btn
            outline
            color="primary"
            type="submit"
            label="$t('button.ok')"
            @click="handleOKClick"
            class="flex-basis-100"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useDialogPluginComponent, Dialog } from 'quasar';

import usePdnsServerConfig from 'lib/usePdnsServerConfig';
import ServerConfig from 'components/ServerConfig.vue';

//------------------------------------------------------------------------------
const ServerConfigDialog = defineComponent({
  name: 'ServerConfigDialog',

  components: {
    ServerConfig,
  },

  props: {
    dismissable: {
      type: Boolean,
      default: true,
    },
  },

  emits: [...useDialogPluginComponent.emits],

  setup() {
    const { serverConfig } = usePdnsServerConfig();
    const {
      dialogRef,
      onDialogHide,
      onDialogOK,
      onDialogCancel,
    } = useDialogPluginComponent();
    const serverConfigRef = ref();

    function handleOKClick() {
      serverConfigRef.value.collect(serverConfig.value);
      onDialogOK();
    }

    function handleCancelClick() {
      onDialogCancel();
    }

    return {
      dialogRef,
      serverConfigRef,
      serverConfig,

      onDialogHide,
      handleOKClick,
      handleCancelClick,
    };
  },
});

//------------------------------------------------------------------------------
export function doModal(dismissable = true) {
  return new Promise((resolve, reject) => {
    try {
      const dismiss = () => {
        if (dismissable) {
          resolve(false);
        }
      };

      Dialog.create({
        component: ServerConfigDialog,
        componentProps: {
          dismissable,
          persistent: !dismissable,
        },
      })
        .onOk(() => {
          resolve(true);
        })
        .onCancel(dismiss)
        .onDismiss(dismiss);
    } catch (error) {
      reject(error);
    }
  });
}

export default ServerConfigDialog;
</script>
