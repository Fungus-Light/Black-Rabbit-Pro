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

function NewFile(){
    CurrentFile = "Untitled.brp"
    isNew=true
    isDirty=true
    Refresh()
    workspaceJS.clear()
    workspaceLUA.clear()
    JSCodeMirror.setValue("//drag block and gen code")
    LUACodeMirror.setValue("-- drag block and gen code")
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
            let xmlJS = Blockly.Xml.textToDom(JSON.parse(str).js);
            workspaceJS.clear()
            Blockly.Xml.domToWorkspace(xmlJS, workspaceJS);

            let xmlLUA = Blockly.Xml.textToDom(JSON.parse(str).lua);
            workspaceLUA.clear()
            Blockly.Xml.domToWorkspace(xmlLUA, workspaceLUA);

        } catch (err) {
            if (err) {
                Alert("Open Failed!!!", err.toString())
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
                let xmlJS = Blockly.Xml.workspaceToDom(workspaceJS);
                let xmlJS_text = Blockly.Xml.domToPrettyText(xmlJS);

                let xmlLUA = Blockly.Xml.workspaceToDom(workspaceLUA);
                let xmlLUA_text = Blockly.Xml.domToPrettyText(xmlLUA);

                let DATA = {
                    js: xmlJS_text,
                    lua: xmlLUA_text
                }

                let DATA_STR = JSbeautyfy(JSON.stringify(DATA), {
                    indent_size: 4,
                    space_in_empty_paren: true
                })

                fs.writeFileSync(_path, DATA_STR, {
                    encoding: "utf-8"
                })

                isNew = false
                isDirty = false
                CurrentFile = _path
                Refresh()
                Message("Save To " + path.basename(_path))

            } catch (err) {
                Alert("Save Failed!!!", err.toString())
            }
        }
    } else {
        try {
            let xmlJS = Blockly.Xml.workspaceToDom(workspaceJS);
            let xmlJS_text = Blockly.Xml.domToPrettyText(xmlJS);

            let xmlLUA = Blockly.Xml.workspaceToDom(workspaceLUA);
            let xmlLUA_text = Blockly.Xml.domToPrettyText(xmlLUA);

            let DATA = {
                js: xmlJS_text,
                lua: xmlLUA_text
            }

            let DATA_STR = JSbeautyfy(JSON.stringify(DATA), {
                indent_size: 4,
                space_in_empty_paren: true
            })

            fs.writeFileSync(CurrentFile, DATA_STR, {
                encoding: "utf-8"
            })

            isDirty = false
            Refresh()
            Message("Save To " + path.basename(CurrentFile))

        } catch (err) {
            Alert("Save Failed!!!", err.toString())
        }
    }
}

function DefaultInit() {
    let defaultJSXML = '<xml xmlns="https://developers.google.com/blockly/xml">' +
        '<block type="level" id="M].@5YbF**`v@}UvC/^F" x="57" y="60">' +
        '<field name="levelname">ExampleLevel</field>' +
        '<statement name="start">' +
        '<block type="log" id="gaU!.BQN$.r?Px%q_t39">' +
        '<field name="message">Hello Black Rabbit!!!</field>' +
        '</block>' +
        '</statement>' +
        '</block>' +
        '</xml>'
    let xmlJS = Blockly.Xml.textToDom(defaultJSXML);
    Blockly.Xml.domToWorkspace(xmlJS, workspaceJS);
}

window.addEventListener('keydown',(ev)=>{
    if((ev.key=='s'||ev.key=='S')&&ev.ctrlKey){
        SaveFile()
    }
})