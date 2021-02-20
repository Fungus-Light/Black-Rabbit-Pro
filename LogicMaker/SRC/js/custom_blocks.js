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

//-------------------------------------
Blockly.Blocks['log'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Log:")
            .appendField(new Blockly.FieldTextInput("Hello World!!!"), "message");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(195);
        this.setTooltip("Log a message in console");
        this.setHelpUrl("");
    }
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

Blockly.Blocks['playbgm'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Play BG Music: ")
            .appendField(new Blockly.FieldTextInput("bg1"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['playcv'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Play CV: ")
            .appendField(new Blockly.FieldTextInput("D_P_O_1"), "cv");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(135);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['playcv_cb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Play CV: ")
            .appendField(new Blockly.FieldTextInput("D_P_O_1"), "cv");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("then: ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
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
//---------------------------------------------------------

Blockly.Blocks['playtimeline'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Play Timeline: ")
            .appendField(new Blockly.FieldTextInput("Enter"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['playtimeline_cb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Play Timeline: ")
            .appendField(new Blockly.FieldTextInput("Enter"), "NAME");
        this.appendStatementInput("cb")
            .setCheck(null)
            .appendField("then: ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

