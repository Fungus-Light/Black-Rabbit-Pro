const Blockly = require("blockly")

let myCodeMirror = CodeMirror(document.getElementById("container"), {
    value: "//drag block and gen code",
    mode: "text/typescript",
    theme: "dracula"
});

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
        }
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

workspace.addChangeListener(()=>{
    let code =Blockly.JavaScript.workspaceToCode(workspace);
    console.log(code)
    myCodeMirror.setValue(code)
})

window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);