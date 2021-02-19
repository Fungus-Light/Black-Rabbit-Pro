let CurrentFile = "Untitled.brp"
let isNew = true

const remote = require("electron").remote

window.onload = () => {
    document.title = "Logic-Maker: " + CurrentFile
}

function OpenFile() {
    remote.dialog.showOpenDialog(null, {
        title: "Open File",
        filters: [
            { name: 'Black Rabbit Logic File', extensions: ['brp'] }
        ],
        properties: ["openFile"]
    }).then(result => {
        console.log(result.canceled)
        console.log(result.filePaths)
    }).catch(err => {
        console.log(err)
    })
}