const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.loadURL('https://www.electronjs.org/docs/latest/tutorial/quick-start')
    // win.loadURL('http://localhost:32768')
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