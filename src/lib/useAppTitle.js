import {
  ref,
  watch,
} from 'vue';
import {
  useMeta,
} from 'quasar';

import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

//------------------------------------------------------------------------------
function useAppTitle() {
  const { t, locale } = useI18n();
  const route = useRoute();
  const title = ref(t('appTitle'));

  useMeta(() => ({
    title: title.value,
  }));

  async function setTitle() {
    if (!route.meta.title) {
      title.value = t('appTitle');
      return;
    }
    title.value = (typeof route.meta.title === 'function')
      ? title.value = await route.meta.title(route, t)
      : title.value = t(route.meta.title);
  }

  watch(route, setTitle);
  watch(locale, setTitle);
}

export default useAppTitle;
