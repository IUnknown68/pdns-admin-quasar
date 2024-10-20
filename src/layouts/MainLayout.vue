<template>
  <q-layout view="hHh lpR lFr">
    <q-header>
      <MainNavbar @toggle-left-drawer="toggleLeftDrawer" />
    </q-header>

    <q-drawer
      :width="200"
      v-model="leftDrawerOpen"
      bordered
    >
      <MainSidebarLeft />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
import {
  useLocalStorage,
} from '@vueuse/core';

import MainNavbar from './MainNavbar.vue';
import MainSidebarLeft from './MainSidebarLeft.vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'MainLayout',

  components: {
    MainNavbar,
    MainSidebarLeft,
  },

  setup() {
    const leftDrawerOpen = useLocalStorage('leftDrawerOpen', false);

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      leftDrawerOpen,

      toggleLeftDrawer,
    };
  },
});
</script>
