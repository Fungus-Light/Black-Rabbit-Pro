const beautyfy = require('js-beautify').js

let myCodeMirror = CodeMirror(document.getElementById("container"), {
    value: "//drag block and gen code",
    mode: "text/typescript",
    theme: "dracula"
});

var isDirty = false

let blocklyArea = document.getElementById('blocklyArea');
let blocklyDiv = document.getElementById('blocklyDiv');
let workspace = Blockly.inject(blocklyDiv,
    {
        toolbox: document.getElementById('toolbox'),
        trashcan: true,
        move: {
            scrollbars: true,
            drag: true,
            wheel: false
        },
        media: './media/'
    });
let onresize = function (e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    let element = blocklyArea;
    let x = 0;
    let y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};

const alert = function (message) {

    Swal.fire('Oops...', message, 'error')
};

function GenJS() {
    try {
        let code = Blockly.JavaScript.workspaceToCode(workspace);

        myCodeMirror.setValue(beautyfy(code, {
            indent_size: 4,
            space_in_empty_paren: true
        }))
    } catch (err) {
        if (err) {
            alert(err.toString())
        }
    }

}

function ClearErr() {
    document.getElementById("err-list").innerText = ""
}

workspace.addChangeListener(() => {
    isDirty = true
    try {
        let code = Blockly.JavaScript.workspaceToCode(workspace);
    } catch (err) {
        if (err) {
            document.getElementById("err-list").innerText = err.toString()
        }
    }
});

window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);