const electron = require('electron');

window.remote = electron.remote;
window.ipcRenderer = electron.ipcRenderer;
window.shell = electron.shell;

const geoip =require("geoip-lite");

window.geoip = geoip;
