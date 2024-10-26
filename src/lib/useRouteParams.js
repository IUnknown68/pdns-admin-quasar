import {
  computed,
} from 'vue';
import { useRoute } from 'vue-router';

//------------------------------------------------------------------------------
function useRouteParams(...paramNames) {
  const route = useRoute();
  return paramNames.map((name) => {
    if (typeof route.params[name] === 'undefined') {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn(`useRouteParams: ${name} is undefined.`);
      }
    }
    return computed(() => route.params[name]);
  });
}

export default useRouteParams;
