import {
  computed,
} from 'vue';
import { useRoute } from 'vue-router';

//------------------------------------------------------------------------------
function useCurrent() {
  const route = useRoute();
  const serverId = computed(() => route.params.serverId);
  const zoneId = computed(() => route.params.zoneId);
  const recordId = computed(() => route.params.recordId);
  return {
    serverId,
    zoneId,
    recordId,
  };
}

export default useCurrent;
