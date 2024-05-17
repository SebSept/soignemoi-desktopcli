const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.setMenu(null)
    win.loadURL('http://cli.ecf.seb7.fr/')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

})

// app.on('window-all-closed', () => {
//     if (process.platform !== 'linux') app.quit()
// })