import RecordEditPage from 'pages/RecordEditPage.vue';
import RecordListPage from 'pages/RecordListPage.vue';

// Mounted at: /server/:serverId/zone/:zoneId

export default {
  // /record
  // List of records of a zones of a server.
  path: 'record',
  children: [
    {
      // /record/:recordId
      // Single record.
      path: ':recordId',
      children: [
        {
          // /record/:recordId
          // Single record.
          path: '',
          name: 'record.edit',
          component: RecordEditPage,
        },
      ],
    },
    {
      // /record/.
      // List of records of a zones of a server.
      path: '',
      name: 'record.list',
      component: RecordListPage,
    },
  ],
};
