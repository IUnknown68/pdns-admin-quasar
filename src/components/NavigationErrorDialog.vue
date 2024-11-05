<template>
  <q-dialog
    :modelValue="!!navigationError"
    position="top"
    backdrop-filter="sepia(100%) blur(4px)"
    square
  >
    <q-banner
      class="bg-red text-white container-340"
    >
      <template v-slot:avatar>
        <q-icon name="cancel" color="white" />
      </template>
      {{navigationError.message}}
    </q-banner>
  </q-dialog>
</template>

<script>
import {
  defineComponent,
} from 'vue';

import useNavigationError from 'lib/useNavigationError';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'NavigationErrorDialog',

  setup() {
    const navigationError = useNavigationError();
    return {
      navigationError,
    };
  },
});
</script>
