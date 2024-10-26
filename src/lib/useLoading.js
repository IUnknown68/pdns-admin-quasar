import { ref } from 'vue';

export const STATUS_NONE = 0;
export const STATUS_LOADING = 1;
export const STATUS_LOADED = 2;
export const STATUS_ERROR = 3;

//------------------------------------------------------------------------------
function useLoading() {
  const status = ref(STATUS_NONE);
  return {
    status,
    setStatus(newStatus) {
      status.value = newStatus;
    },
  };
}

export default useLoading;
