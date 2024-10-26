import ServerListPage from 'pages/ServerListPage.vue';
import ServerEditPage from 'pages/ServerEditPage.vue';

import zone from './zone';

// Mounted at: /server

export default {
  // /server
  // List of server.
  path: '/server',
  meta: {
    title: 'servers.title',
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
        },
      ],
    },
    {
      // /server/.
      // List of server.
      path: '',
      name: 'server.list',
      component: ServerListPage,
    },
  ],
};
