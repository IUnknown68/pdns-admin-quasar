<template>
  <transition
    v-show="visible"
    :duration="1800"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut delay-8s slow"
    @after-enter="hide"
  >
    <q-banner v-bind="$attrs">
      <slot />
    </q-banner>
  </transition>
</template>

<script>
import { defineComponent, ref } from 'vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'BannerNotification',

  setup() {
    const visible = ref(false);

    function show() {
      visible.value = true;
    }

    function hide() {
      visible.value = false;
    }

    return {
      visible,
      show,
      hide,
    };
  },
});
</script>
