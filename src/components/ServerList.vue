<template>
  <q-list>
    <q-item
      v-for="server of servers"
      :key="server.value.id"
      clickable
      v-ripple
      :to="{name: 'server.edit', params: {serverId: server.value.id}}"
    >
      <q-item-section avatar>
        <q-icon color="primary" name="dns" />
      </q-item-section>
      <q-item-section>
        <q-item-label overline>
          {{server.value.type}}, {{server.value.daemon_type}}
        </q-item-label>
        <q-item-label class="text-subtitle1">
          {{server.value.id}}
        </q-item-label>
        <q-item-label caption>
          {{server.value.version}}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent } from 'vue';

//------------------------------------------------------------------------------
export default defineComponent({
  name: 'ServerList',

  props: {
    servers: {
      type: Array,
      default: () => ([]),
    },
  },
});
</script>
