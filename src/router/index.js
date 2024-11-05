import { route as initRouting } from 'quasar/wrappers';
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';

import useNavigationError from 'lib/useNavigationError';

import routes from './routes';
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default initRouting((/* { store, ssrContext } */) => {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  const navigationError = useNavigationError();

  router.onError((err) => {
    navigationError.value = err;
  });

  router.beforeResolve(async (to, from) => {
    navigationError.value = null;
    // The routes might depend on each other, so call `beforeResolve()`
    // one after the other. Don't use `Promise.all()` here.
    for (const route of to.matched) {
      if (route.meta.beforeResolve) {
        await route.meta.beforeResolve(to, from);
      }
    }
  });

  return router;
});
