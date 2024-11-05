import {
  reactive,
  computed,
  ref,
  toValue,
} from 'vue';

import useLoading, {
  STATUS_ERROR,
  STATUS_LOADING,
  STATUS_LOADED,
} from 'lib/useLoading';

//------------------------------------------------------------------------------
function useAsStore(load) {
  const itemMap = reactive(new Map());
  const itemList = computed(() => [...itemMap.values()]);
  const { status, setStatus } = useLoading();
  const lastError = ref(null);

  //------------------------------------------------------------------------------
  async function loadItems(params, statusRequired = STATUS_LOADED) {
    if ((status.value === STATUS_LOADING) || (status.value >= statusRequired)) {
      return status.value;
    }
    try {
      setStatus(STATUS_LOADING);
      lastError.value = null;
      const data = await load(params, status.value, statusRequired);

      itemMap.clear();
      for (const item of data) {
        itemMap.set(item.id, item);
      }
      setStatus(STATUS_LOADED);
    } catch (error) {
      setStatus(STATUS_ERROR);
      lastError.value = error;
      throw error;
    }
    return status.value;
  }

  //------------------------------------------------------------------------------
  function getItem(id) {
    return itemMap.get(toValue(id));
  }

  function useStore() {
    return {
      items: itemList,
      status,
      lastError,
      loadItems,
      getItem,
    };
  }

  return useStore;
}

export default useAsStore;
