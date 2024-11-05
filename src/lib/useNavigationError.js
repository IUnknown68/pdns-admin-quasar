import { ref } from 'vue';

const navigationError = ref(null);

//------------------------------------------------------------------------------
function useNavigationError() {
  return navigationError;
}

export default useNavigationError;
