import server from 'domain/server/i18n/en-US';
import zone from 'domain/zone/i18n/en-US';
import record from 'domain/record/i18n/en-US';

export default {
  appTitle: 'PowerDNS',
  version: 'Version',
  label: {
    menu: 'Menu',
    goHome: 'Go Home',
    noneMale: 'None',
  },
  message: {
    pageNotFound: 'Page not found',
    settingsSaved: 'Settings saved.',
    loadingData: 'Loading app...',
  },
  menu: {
    darkMode: 'Dark Mode',
  },
  button: {
    ok: 'OK',
    cancel: 'Cancel',
    save: 'Save',
    retry: 'Retry',
    delete: 'Delete',
    edit: 'Edit',
    editZone: 'Edit Zone',
    editRecords: 'Edit Records',
  },
  dashboard: {
    title: 'Dashboard',
  },
  settings: {
    title: 'Settings',
  },
  about: {
    title: 'Info',
  },
  boot: {
    error: {
      noConfig: "Can't start without a config.",
    },
  },
  server,
  zone,
  record,
};
