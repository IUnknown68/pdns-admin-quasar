<template>
  <q-page class="q-pa-md flex justify-center items-start">
    <h1>ServerPage</h1>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import usePdnsServer from 'lib/usePdnsServer';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'ServerPage',

  components: {
  },

  setup() {
    const { servers, lastError } = usePdnsServer();
    const route = useRoute();
    console.log(route);
    return {
      servers,
      lastError,
    };
  },
});
</script>
