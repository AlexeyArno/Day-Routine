const electron = require('electron');
const {Tray} = require('electron')

const { app, BrowserWindow } = require('electron');

const path = require('path');
const url = require('url');

const prodEnv = false
const htmlPath = "final/index.html";

let mainWindow;
let tray = null


function createWindow () {
  var params = {
    width: 690,
    height: 540,
    minHeight: 540,
    minWidth: 690,
    autoHideMenuBar: true,
    icon:__dirname+'/final/res/images/routinelogo@small.png',
    nodeIntegration: true
  };
  mainWindow = new BrowserWindow(params);

  mainWindow.setMenu(null);

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, htmlPath),
    protocol: 'file:',
    slashes: true
  }));

  // mainWindow.loadURL(`file://${__dirname}/final/index.html`)

  // Open the DevTools.

  if (!prodEnv) {
      mainWindow.webContents.openDevTools()
  }
  // throw new Error(JSON.stringify({env:process.env.NODE_ENV, dev:process.env.DEV_TOOLS}))


  mainWindow.on('closed', function () {
    mainWindow = null
  })

  tray = new Tray(__dirname+'/final/res/images/routinelogo@small.png')

  tray.setToolTip('Day-Routine')
  tray.on("click", ()=>{
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })
  mainWindow.on('show', () => {
    tray.setHighlightMode('always')
  })
  mainWindow.on('hide', () => {
    tray.setHighlightMode('never')
  })
}

if (!prodEnv) {
  require('electron-reload')(__dirname);
}

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});

