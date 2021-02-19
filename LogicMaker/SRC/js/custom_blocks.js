class StrictConnectionChecker extends Blockly.ConnectionChecker {
    /**
     * Constructor for the connection checker.
     */
    constructor() {
        super();
    }

    /**
     * Type check arrays must either intersect or both be null.
     * @override
     */
    doTypeChecks(a, b) {
        const checkArrayOne = a.getCheck();
        const checkArrayTwo = b.getCheck();

        if (!checkArrayOne || !checkArrayTwo) {
            // Null arrays can only connect to other null arrays.
            return checkArrayOne == checkArrayTwo;
        }

        // Find any intersection in the check lists.
        for (let i = 0; i < checkArrayOne.length; i++) {
            if (checkArrayTwo.indexOf(checkArrayOne[i]) != -1) {
                return true;
            }
        }
        // No intersection.
        return false;
    }
}

const registrationType = Blockly.registry.Type.CONNECTION_CHECKER;

const TYPES = [
    "command"
]
TYPES.forEach(typename => {
    Blockly.registry.register(
        registrationType, typename, StrictConnectionChecker);
});

Blockly.Blocks['level'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Level Name: ")
            .appendField(new Blockly.FieldTextInput("ExampleLevel"), "levelname");
        this.appendStatementInput("start")
            .setCheck(null)
            .appendField("Start: ");
        this.appendStatementInput("update")
            .setCheck(null)
            .appendField("Update: ");
        this.appendStatementInput("fixedupdate")
            .setCheck(null)
            .appendField("FiexedUpdate: ");
        this.appendStatementInput("destroy")
            .setCheck(null)
            .appendField("Destroy: ");
        this.setColour(180);
        this.setTooltip("The basic struct of a level.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['level'] = function (block) {
    let text_levelname = block.getFieldValue('levelname');

    text_levelname = text_levelname.replaceAll(" ", "")
    text_levelname = text_levelname.replaceAll("\"", "")
    text_levelname = text_levelname.replaceAll("\'", "")

    let statements_start = Blockly.JavaScript.statementToCode(block, 'start');
    let statements_update = Blockly.JavaScript.statementToCode(block, 'update');
    let statements_fixedupdate = Blockly.JavaScript.statementToCode(block, 'fixedupdate');
    let statements_destroy = Blockly.JavaScript.statementToCode(block, 'destroy');
    // TODO: Assemble JavaScript into code variable.
    let code =
        '\nclass ' + text_levelname + ' implements IGameLevel {\n' +
        '\tname: string;\n' +
        '\troot: Transform;\n' +
        '\tOnStart(): void {\n' +
        '\t' + statements_start + '\n' +
        '\t}\n' +
        '\tOnUpdate(): void {\n' +
        '\t' + statements_update + '\n' +
        '\t}\n' +
        '\tOnFixedUpdate(): void {\n' +
        '\t' + statements_fixedupdate + '\n' +
        '\t}\n' +
        '\tOnDestroy(): void {\n' +
        '\t' + statements_destroy + '\n' +
        '\t}\n' +
        '}\n'

    return code;
};

//-------------------------------------
Blockly.Blocks['log'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Log:")
            .appendField(new Blockly.FieldTextInput("Hello Black Rabbit!!!"), "message");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(195);
        this.setTooltip("Log a message in console");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['log'] = function (block) {
    let text_message = block.getFieldValue('message');
    // TODO: Assemble JavaScript into code variable.
    let code = 'Debug.Log(\"' + text_message + '\" )\n';
    return code;
};

Blockly.Blocks['warning'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Warning:")
            .appendField(new Blockly.FieldTextInput("Something need to be noticed!!!"), "message");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("Log Warning message in console.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['warning'] = function (block) {
    let text_message = block.getFieldValue('message');

    let code = 'Debug.LogWarning( \"' + text_message + '\" )\n';
    return code;
};

Blockly.Blocks['error'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Error: ")
            .appendField(new Blockly.FieldTextInput("Something wrong happened"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("Log an error message in console.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['error'] = function (block) {
    let text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    let code = 'Debug.LogError( \"' + text_name + '\" )\n';
    return code;
};

Blockly.Blocks['wait_for_seconds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Wait: ")
            .appendField(new Blockly.FieldNumber(0, 0), "time")
            .appendField("s");
        this.appendStatementInput("actions")
            .setCheck(null)
            .appendField("Then: ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['wait_for_seconds'] = function (block) {
    let number_time = block.getFieldValue('time');
    let statements_actions = Blockly.JavaScript.statementToCode(block, 'actions');
    // TODO: Assemble JavaScript into code variable.
    let code = 'WaitForSeconds(' + number_time + ', () => {\n' +
        statements_actions +
        '})\n';
    return code;
};

Blockly.Blocks['comment'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("comment: ")
            .appendField(new Blockly.FieldTextInput("Note Something..."), "comment");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['comment'] = function (block) {
    var text_comment = block.getFieldValue('comment');
    // TODO: Assemble JavaScript into code variable.
    var code = '//' + text_comment + '\n';
    return code;
};

//------------------------------------
Blockly.Blocks['dialog_block'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Block Name")
            .appendField(new Blockly.FieldTextInput("block"), "NAME");
        this.appendStatementInput("command")
            .setCheck("command")
            .appendField("Block Commond");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "dialogblock");
        this.setColour(330);
        this.setTooltip("this is a definition of a dialog block");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['dialog_block'] = function (block) {
    let value_name = block.getFieldValue('NAME');
    let statements_command = Blockly.JavaScript.statementToCode(block, 'command');
    value_name = value_name.replaceAll("\'", "")
    value_name = value_name.replaceAll("\"", "")
    value_name = value_name.replaceAll(" ", "")
    let code = 'let ' + value_name + ' = CreateDialog();\n';
    statements_command = statements_command.replaceAll("$blockname$", value_name)
    return code + statements_command;
};

//---------------------------------
Blockly.Blocks['say'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Say")
            .appendField("Text")
            .appendField(new Blockly.FieldTextInput("Hello World"), "text")
            .appendField("Tag")
            .appendField(new Blockly.FieldTextInput("GOD"), "tag");
        this.setPreviousStatement(true, "command");
        this.setNextStatement(true, "command");
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['say'] = function (block) {
    var value_text = block.getFieldValue('text');
    var value_tag = block.getFieldValue('tag');
    // TODO: Assemble JavaScript into code variable.
    var code = '$blockname$.Say(\'' + value_text + '\',\'' + value_tag + '\');\n';
    return code;
};

Blockly.Blocks['options'] = {
    init: function () {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("Options:");
        this.appendDummyInput()
            .appendField("Pause Here")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip("Options to do");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['options'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
    // TODO: Assemble JavaScript into code variable.
    var code = '$blockname$.Options([\n' +
        statements_name +
        '],' + checkbox_name.toString() + ');\n';
    return code;
};

Blockly.Blocks['option'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Option Text:")
            .appendField(new Blockly.FieldTextInput("default"), "text");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("Action:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['option'] = function (block) {
    let text_text = block.getFieldValue('text');
    let statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    let code = 'option(\"' + text_text + '\",()=>{\n' +
        statements_name +
        '}),\n';
    return code;
};

Blockly.Blocks['block_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Start Block Name: ")
            .appendField(new Blockly.FieldTextInput("block"), "blockname");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['block_start'] = function (block) {
    let text_blockname = block.getFieldValue('blockname');
    // TODO: Assemble JavaScript into code variable.
    let code = text_blockname + '.Start();\n';
    return code;
};