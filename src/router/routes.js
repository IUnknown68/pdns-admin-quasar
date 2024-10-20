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
      },
      {
        path: '/',
        name: 'home',
        component: IndexPage,
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

export default routes;
