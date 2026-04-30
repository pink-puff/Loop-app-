const { app, BrowserWindow } = require('electron');

app.setName('Loop');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    title: 'Loop',
    backgroundColor: '#f5f3ef'
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
