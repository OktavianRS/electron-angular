var app = require('app'),
    BrowserWindow = require('browser-window'),
        ipc = require('ipc')


var dialog = require('dialog');
var mainWindow = null;
var addUserWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 830,
        height: 450,
        fullscreen: true,
    });
mainWindow.setMenu(null);
    ipc.on('exit', function() {
        app.quit();
    });
    
    mainWindow.loadUrl('file://' + __dirname + '/windows/main/main.html');
    //smainWindow.openDevTools();
});

ipc.on('log', function() {
    mainWindow.reload();
    addUserWindow.close();
});


ipc.on('openUserAddForm', function() {
    addUserWindow = new BrowserWindow({
        width: 400,
        height: 300
    });
    addUserWindow.loadUrl('file://' + __dirname + '/windows/addForm/form.html');
});


ipc.on('reloadMainWindow', function() {
    mainWindow.reload();
});

ipc.on('refreshForm', function() {
    addUserWindow.reload();
});