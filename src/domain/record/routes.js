import RecordEditPage from './pages/RecordEditPage.vue';
import RecordListPage from './pages/RecordListPage.vue';

import useRecords from './useRecords';

const {
  loadItems: loadRecords,
} = useRecords();

// Mounted at: /server/:serverId/zone/:zoneId/

//------------------------------------------------------------------------------
export default {
  // record
  // List of records of a zones of a server.
  path: 'record',
  meta: {
    beforeResolve: (to) => loadRecords(to.params),
  },
  children: [
    {
      // record/:recordId
      // Single record.
      path: ':recordId',
      children: [
        {
          // record/:recordId
          // Single record.
          path: '',
          name: 'record.edit',
          component: RecordEditPage,
          meta: {
            title: (route, t) => t('record.recordEditPageTitle', route.params),
          },
        },
      ],
    },
    {
      // record/.
      // List of records of a zones of a server.
      path: '',
      name: 'record.list',
      component: RecordListPage,
      meta: {
        title: (route, t) => t('record.recordListPageTitle', route.params),
      },
    },
  ],
};
