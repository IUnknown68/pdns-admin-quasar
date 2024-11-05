import record from 'domain/record/routes.js';

import ZoneEditPage from './pages/ZoneEditPage.vue';
import ZoneListPage from './pages/ZoneListPage.vue';
import useZones from './useZones';

const {
  loadItems: loadZones,
} = useZones();

// Mounted at: /server/:serverId/

//------------------------------------------------------------------------------
export default {
  // zone
  // List of zones of a server.
  path: 'zone',
  meta: {
    beforeResolve: (to) => loadZones(to.params),
  },
  children: [
    {
      // zone/:zoneId
      // Single zone.
      path: ':zoneId',
      children: [
        record,
        {
          // zone/:zoneId/.
          // Single zone.
          path: '',
          name: 'zone.edit',
          component: ZoneEditPage,
          meta: {
            title: (route, t) => t('zone.zoneEditPageTitle', route.params),
          },
        },
      ],
    },
    {
      // zone/.
      // List of zones of a server.
      path: '',
      name: 'zone.list',
      component: ZoneListPage,
      meta: {
        title: (route, t) => t('zone.zoneListPageTitle', route.params),
      },
    },
  ],
};
