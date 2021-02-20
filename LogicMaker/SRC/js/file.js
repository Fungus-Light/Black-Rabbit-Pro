let CurrentFile = "Untitled.brp"
let isNew = true

const fs = require('fs')
const path = require('path')

const dialog = require("electron").remote.dialog

function Refresh() {
    let postfix = ""
    if (isDirty) {
        postfix = "(未保存)"
    }
    document.title = "Logic-Maker: " + path.basename(CurrentFile) + postfix
}

window.onload = () => {
    Refresh()
    DefaultInit()
}

function OpenFile() {

    let paths = dialog.showOpenDialogSync(null, {
        title: "Open File",
        filters: [
            { name: 'Black Rabbit Logic File', extensions: ['brp'] }
        ],
        properties: ["openFile"]
    })

    console.log(paths)

    if (paths != undefined) {
        let realPath = paths[0]
        let str = fs.readFileSync(realPath, {
            encoding: "utf-8"
        })

        isNew = false;
        isDirty = false
        CurrentFile = realPath
        Refresh()
        try {
            let xml = Blockly.Xml.textToDom(str);
            Blockly.Xml.domToWorkspace(xml, workspace);
        } catch (err) {
            if (err) {
                Alert("Open Failed!!!", err.toString())
                document.getElementById("err-list").innerText = err.toString()
            }
        }

    }
}

function SaveFile() {

    if (isNew) {
        let _path = dialog.showSaveDialogSync(null, {
            title: "Save File",
            filters: [
                { name: 'Black Rabbit Logic File', extensions: ['brp'] }
            ],
            properties: ["showOverwriteConfirmation"]
        })

        console.log(_path)

        if (_path != undefined) {
            try {
                let xml = Blockly.Xml.workspaceToDom(workspace);
                let xml_text = Blockly.Xml.domToPrettyText(xml);

                fs.writeFileSync(_path, xml_text, {
                    encoding: "utf-8"
                })

                isNew = false
                isDirty = false
                CurrentFile = _path
                Refresh()
                Message("Save To " + path.basename(_path))

            } catch (err) {
                Alert("Save Failed!!!", err.toString())
                document.getElementById("err-list").innerText = err.toString()
            }
        }
    } else {
        try {
            let xml = Blockly.Xml.workspaceToDom(workspace);
            let xml_text = Blockly.Xml.domToPrettyText(xml);

            fs.writeFileSync(CurrentFile, xml_text, {
                encoding: "utf-8"
            })

            isDirty = false
            Refresh()
            Message("Save To " + path.basename(CurrentFile))

        } catch (err) {
            Alert("Save Failed!!!", err.toString())
            document.getElementById("err-list").innerText = err.toString()
        }
    }
}

function DefaultInit() {
    let defaultXML = '<xml xmlns="https://developers.google.com/blockly/xml">' +
        '<block type="level" id="M].@5YbF**`v@}UvC/^F" x="57" y="60">' +
        '<field name="levelname">ExampleLevel</field>' +
        '<statement name="start">' +
        '<block type="log" id="gaU!.BQN$.r?Px%q_t39">' +
        '<field name="message">Hello Black Rabbit!!!</field>' +
        '</block>' +
        '</statement>' +
        '</block>' +
        '</xml>'
    let xml = Blockly.Xml.textToDom(defaultXML);
    Blockly.Xml.domToWorkspace(xml, workspace);
}