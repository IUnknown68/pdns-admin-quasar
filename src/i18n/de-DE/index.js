import server from 'domain/server/i18n/de-DE';
import zone from 'domain/zone/i18n/de-DE';
import record from 'domain/record/i18n/de-DE';

export default {
  appTitle: 'PowerDNS',
  version: 'Version',
  label: {
    menu: 'Menu',
    goHome: 'Zur Startseite',
    noneMale: 'Kein',
  },
  message: {
    pageNotFound: 'Seite nicht gefunden',
    settingsSaved: 'Einstellungen gespeichert.',
    loadingData: 'Lade App...',
  },
  menu: {
    darkMode: 'Dunkler Modus',
  },
  button: {
    ok: 'OK',
    cancel: 'Abbrechen',
    save: 'Speichern',
    retry: 'Nochmal versuchen',
    delete: 'Löschen',
    edit: 'Bearbeiten',
    editZone: 'Zone Bearbeiten',
    editRecords: 'Einträge Bearbeiten',
  },
  dashboard: {
    title: 'Dashboard',
  },
  settings: {
    title: 'Einstellungen',
  },
  about: {
    title: 'Info',
  },
  boot: {
    error: {
      noConfig: 'Ohne Konfiguration geht hier nix.',
    },
  },
  server,
  zone,
  record,
};
