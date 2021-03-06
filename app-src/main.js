'use strict'
const {app, BrowserWindow} = require('electron')


let mainWindow = null;


app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin') app.quit();
});

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        webPreferences: true,
        kiosk: true
    });
    mainWindow.loadURL('https://www.google.com/');
    mainWindow.on('closed', ()=>{
        mainWindow = null;
    });

});