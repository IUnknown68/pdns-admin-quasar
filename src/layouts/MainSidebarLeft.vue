<template>
  <q-list class="text-grey-8">
    <q-item
      v-for="menuItem of menu"
      :key="menuItem.name"
      :to="{name: menuItem.name}"
      :exact="menuItem.exact"
      active-class="text-secondary"
    >
      <q-item-section avatar>
        <q-icon :name="menuItem.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>
          {{$t(menuItem.title)}}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import {
  defineComponent,
  computed,
} from 'vue';

import {
  menu,
} from 'src/router/routes';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'MainSidebarLeft',

  setup() {
    const visibleMenuItems = computed(() => menu.filter((item) => !item.hide));
    return {
      menu: visibleMenuItems,
    };
  },
});
</script>
