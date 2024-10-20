import MainLayout from 'layouts/MainLayout.vue';
import AboutPage from 'pages/AboutPage.vue';
import IndexPage from 'pages/IndexPage.vue';
import SettingsPage from 'pages/SettingsPage.vue';
import ServerPage from 'pages/ServerPage.vue';

import ErrorNotFound from 'pages/ErrorNotFound.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/server/:id',
        name: 'server',
        component: ServerPage,
        meta: {
          title: 'servers.title',
          icon: 'dns',
          hide: true,
        },
      },
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
  icon: route.meta.icon,
  exact: route.meta.exact,
  hide: route.meta.hide,
  name: route.name,
}));

export default routes;
