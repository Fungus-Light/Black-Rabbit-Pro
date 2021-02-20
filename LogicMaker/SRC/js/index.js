const JSbeautyfy = require('js-beautify').js
const LUAbeatutify = require('lua-fmt')

var isJS = false

let JSCodeMirror = CodeMirror(document.getElementById("containerJS"), {
    value: "//drag block and gen code",
    mode: "text/typescript",
    theme: "dracula"
});

let LUACodeMirror = CodeMirror(document.getElementById("containerLUA"), {
    value: "-- drag block and gen code",
    mode: "text/x-lua",
    theme: "dracula"
});

function SwitchState() {
    isJS = !isJS
    if (isJS) {
        document.getElementById("JSAPP").style.display = "block"
        document.getElementById("LUAAPP").style.display = "none"
        onresizeJS();
    } else {
        document.getElementById("JSAPP").style.display = "none"
        document.getElementById("LUAAPP").style.display = "block"
        onresizeLUA();
    }
}

var isDirty = false

//---------------------------------------------

let blocklyAreaJS = document.getElementById('blocklyAreaJS');
let blocklyDivJS = document.getElementById('blocklyDivJS');
let workspaceJS = Blockly.inject(blocklyDivJS,
    {
        toolbox: document.getElementById('toolboxJS'),
        trashcan: true,
        move: {
            scrollbars: true,
            drag: true,
            wheel: false
        },
        media: './media/'
    });
let onresizeJS = function (e) {
    // Compute the absolute coordinates and dimensions of blocklyAreaJS.
    let element = blocklyAreaJS;
    let x = 0;
    let y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDivJS over blocklyAreaJS.
    blocklyDivJS.style.left = x + 'px';
    blocklyDivJS.style.top = y + 'px';
    blocklyDivJS.style.width = blocklyAreaJS.offsetWidth + 'px';
    blocklyDivJS.style.height = blocklyAreaJS.offsetHeight + 'px';
    Blockly.svgResize(workspaceJS);
};

function GenJS() {
    try {
        let code = Blockly.JavaScript.workspaceToCode(workspaceJS);

        JSCodeMirror.setValue(JSbeautyfy(code, {
            indent_size: 4,
            space_in_empty_paren: true
        }))
    } catch (err) {
        if (err) {
            Alert(err.toString())
        }
    }

}

function ClearErrJS() {
    document.getElementById("err-listJS").innerText = ""
}

workspaceJS.addChangeListener(() => {
    isDirty = true
    try {
        let code = Blockly.JavaScript.workspaceToCode(workspaceJS);
    } catch (err) {
        if (err) {
            document.getElementById("err-listJS").innerText = err.toString()
        }
    }
});

//---------------------------------------------

let blocklyAreaLUA = document.getElementById('blocklyAreaLUA');
let blocklyDivLUA = document.getElementById('blocklyDivLUA');
let workspaceLUA = Blockly.inject(blocklyDivLUA,
    {
        toolbox: document.getElementById('toolboxLUA'),
        trashcan: true,
        move: {
            scrollbars: true,
            drag: true,
            wheel: false
        },
        media: './media/'
    });
let onresizeLUA = function (e) {
    // Compute the absolute coordinates and dimensions of blocklyAreaJS.
    let element = blocklyAreaLUA;
    let x = 0;
    let y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDivJS over blocklyAreaLUA.
    blocklyDivLUA.style.left = x + 'px';
    blocklyDivLUA.style.top = y + 'px';
    blocklyDivLUA.style.width = blocklyAreaLUA.offsetWidth + 'px';
    blocklyDivLUA.style.height = blocklyAreaLUA.offsetHeight + 'px';
    Blockly.svgResize(workspaceLUA);
};

function GenLUA() {
    try {
        let code = Blockly.Lua.workspaceToCode(workspaceLUA);
        code = LUAbeatutify.formatText(code)
        LUACodeMirror.setValue(code)
    } catch (err) {
        if (err) {
            Alert(err.toString())
        }
    }

}

function ClearErrLUA() {
    document.getElementById("err-listLUA").innerText = ""
}

workspaceLUA.addChangeListener(() => {
    isDirty = true
    try {
        let code = Blockly.Lua.workspaceToCode(workspaceLUA);
    } catch (err) {
        if (err) {
            document.getElementById("err-listLUA").innerText = err.toString()
        }
    }
});

//---------------------------------------------

window.addEventListener('resize', () => {
    onresizeJS()
    onresizeLUA()
}, false);
onresizeJS();
onresizeLUA();
Blockly.svgResize(workspaceJS);
Blockly.svgResize(workspaceLUA);