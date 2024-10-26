import record from 'domain/record/routes.js';

import ZoneEditPage from './pages/ZoneEditPage.vue';
import ZoneListPage from './pages/ZoneListPage.vue';

// Mounted at: /server/:serverId/

//------------------------------------------------------------------------------
export default {
  // zone
  // List of zones of a server.
  path: 'zone',
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
        },
      ],
    },
    {
      // zone/.
      // List of zones of a server.
      path: '',
      name: 'zone.list',
      component: ZoneListPage,
    },
  ],
};
