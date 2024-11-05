import zone from 'domain/zone/routes.js';

import ServerListPage from './pages/ServerListPage.vue';
import ServerEditPage from './pages/ServerEditPage.vue';
import useServer from './useServer';

const {
  loadItems: loadServer,
  getItem: getServer,
} = useServer();

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
    beforeResolve: () => loadServer(),
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
            title: (route, t) => t(
              'server.serverEditPageTitle',
              getServer(route.params.serverId),
            ),
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
