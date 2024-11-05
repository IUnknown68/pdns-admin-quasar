<template>
  <q-banner
    v-if="lastError"
    rounded
    inline-actions
    class="bg-red text-white"
  >
    <template v-slot:avatar>
      <q-icon name="cancel" color="white" />
    </template>
    {{lastError.message}}
    <template v-slot:action>
      <q-btn
        flat
        color="white"
        :label="$t('button.retry')"
        @click="$emit('retry')"
      />
    </template>
  </q-banner>
</template>

<script>
import {
  defineComponent,
} from 'vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'LoadingErrorBanner',

  props: {
    lastError: {
      type: Object,
      default: () => null,
    },
  },
});
</script>
