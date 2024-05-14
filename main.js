const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    // @todo mettre l'url de prod
    // win.loadURL('http://localhost:32768')
    // pour l'exemple :
    win.loadURL('https://www.electronjs.org/docs/latest/tutorial/quick-start')
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