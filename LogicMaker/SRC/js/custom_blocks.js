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