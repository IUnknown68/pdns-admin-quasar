import zone from 'domain/zone/routes.js';

import ServerListPage from './pages/ServerListPage.vue';
import ServerEditPage from './pages/ServerEditPage.vue';

// Mounted at: /server

//------------------------------------------------------------------------------
export default {
  // /server
  // List of server.
  path: '/server',
  meta: {
    title: 'server.title',
    target: 'server.list',
    icon: 'dns',
  },
  children: [
    {
      // /server/:serverId
      // List of zones of a server.
      path: ':serverId',
      children: [
        zone,
        {
          // /server/:serverId/.
          // Single server.
          path: '',
          name: 'server.edit',
          component: ServerEditPage,
          meta: {
            title: 'server.serverEditPageTitle',
          },
        },
      ],
    },
    {
      // /server/.
      // List of server.
      path: '',
      name: 'server.list',
      component: ServerListPage,
      meta: {
        title: 'server.serverListPageTitle',
      },
    },
  ],
};
