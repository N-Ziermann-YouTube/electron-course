const electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron', {
  subscribeStatistics: (callback: (statistics: any) => void) => {
    electron.ipcRenderer.on('statistics', (_, stats) => {
      callback(stats);
    });
  },
  getStaticData: () => electron.ipcRenderer.invoke('getStaticData'),
});
