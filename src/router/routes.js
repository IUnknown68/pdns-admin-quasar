import MainLayout from 'layouts/MainLayout.vue';
import AboutPage from 'pages/AboutPage.vue';
import IndexPage from 'pages/IndexPage.vue';
import SettingsPage from 'pages/SettingsPage.vue';

import ErrorNotFound from 'pages/ErrorNotFound.vue';

import server from 'domain/server/routes.js';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/settings',
        name: 'settings',
        component: SettingsPage,
        meta: {
          title: 'settings.title',
          icon: 'settings',
        },
      },
      {
        path: '/about',
        name: 'about',
        component: AboutPage,
        meta: {
          title: 'about.title',
          icon: 'info',
        },
      },
      server,
      {
        path: '/',
        name: 'home',
        component: IndexPage,
        meta: {
          title: 'dashboard.title',
          icon: 'dashboard',
          exact: true,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];

export const menu = [...routes[0].children].reverse().map((route) => ({
  title: route.meta.title,
  target: route.meta.target,
  icon: route.meta.icon,
  exact: route.meta.exact,
  hide: route.meta.hide,
  name: route.name,
}));

export default routes;
