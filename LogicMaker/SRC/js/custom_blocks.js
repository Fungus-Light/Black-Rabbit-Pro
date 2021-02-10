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
        this.appendValueInput("LevelName")
            .setCheck(null)
            .appendField(new Blockly.FieldLabelSerializable("Level Name"), "NAME");
        this.appendStatementInput("Start")
            .setCheck(null)
            .appendField("start");
        this.appendStatementInput("Update")
            .setCheck(null)
            .appendField("update");
        this.appendStatementInput("FixedUpdate")
            .setCheck(null)
            .appendField("fiexupdate");
        this.appendStatementInput("Destroy")
            .setCheck(null)
            .appendField("destroy");
        this.setInputsInline(false);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['level'] = function (block) {
    var value_levelname = Blockly.JavaScript.valueToCode(block, 'LevelName', Blockly.JavaScript.ORDER_ATOMIC);

    value_levelname = value_levelname.replaceAll(" ", "")
    value_levelname = value_levelname.replaceAll("\"", "")
    value_levelname = value_levelname.replaceAll("\'", "")

    var statements_start = Blockly.JavaScript.statementToCode(block, 'Start');
    var statements_update = Blockly.JavaScript.statementToCode(block, 'Update');
    var statements_fixedupdate = Blockly.JavaScript.statementToCode(block, 'FixedUpdate');
    var statements_destroy = Blockly.JavaScript.statementToCode(block, 'Destroy');
    // TODO: Assemble JavaScript into code variable.
    var code =
        '\nclass ' + value_levelname + ' implements IGameLevel {\n' +
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
        this.appendValueInput("message")
            .setCheck(null)
            .appendField("Log");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['log'] = function (block) {
    var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Debug.Log( ' + value_message + ' )\n';
    return code;
};

Blockly.Blocks['warning'] = {
    init: function () {
        this.appendValueInput("message")
            .setCheck(null)
            .appendField("Warning");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['warning'] = function (block) {
    var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Debug.LogWarning( ' + value_message + ' )\n';
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