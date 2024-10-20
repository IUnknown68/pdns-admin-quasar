import MainLayout from 'layouts/MainLayout.vue';
import AboutPage from 'pages/AboutPage.vue';
import IndexPage from 'pages/IndexPage.vue';

import ErrorNotFound from 'pages/ErrorNotFound.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/about',
        name: 'about',
        component: AboutPage,
        meta: {
          title: 'about',
          icon: 'info',
        },
      },
      {
        path: '/',
        name: 'home',
        component: IndexPage,
        meta: {
          title: 'dashboard',
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
  name: route.name,
}));

export default routes;
