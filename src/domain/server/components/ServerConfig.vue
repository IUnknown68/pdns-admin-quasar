<template>
  <div class="q-pb-md">
    <q-input
      v-bind="inputProps"
      v-model="url"
      :hint="$t('server.serverConfig.url.hint')"
      :label="$t('server.serverConfig.url.label')"
    />
  </div>
  <div class="q-pb-md">
    <q-input
      v-bind="inputProps"
      v-model="apiKey"
      :hint="$t('server.serverConfig.apiKey.hint')"
      :label="$t('server.serverConfig.apiKey.label')"
    />
  </div>
</template>

<script>
import { defineComponent, ref, toValue } from 'vue';
import useInputProps from 'lib/useInputProps';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'ServerConfig',

  props: {
    serverConfig: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const serverConfig = toValue(props.serverConfig);
    const url = ref(serverConfig.url);
    const apiKey = ref(serverConfig.apiKey);

    function collect(target) {
      const modified = (target.url !== url.value)
        || (target.apiKey !== apiKey.value);
      if (!modified) {
        return false;
      }
      target.url = url.value;
      target.apiKey = apiKey.value;
      return true;
    }

    return {
      inputProps: useInputProps(),
      url,
      apiKey,

      collect,
    };
  },
});
</script>
