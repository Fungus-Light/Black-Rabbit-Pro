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
    init: function() {
      this.appendStatementInput("command")
          .setCheck(null)
          .appendField("Block Define");
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.JavaScript['dialog_block'] = function (block) {
    var statements_command = Blockly.JavaScript.statementToCode(block, 'command');
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

//---------------------------------
Blockly.Blocks['say'] = {
    init: function () {
        this.appendValueInput("text")
            .setCheck("String")
            .appendField("Say Text");
        this.appendValueInput("tag")
            .setCheck("String")
            .appendField("Dialog Tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['say'] = function (block) {
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    var value_tag = Blockly.JavaScript.valueToCode(block, 'tag', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '$blockname$.Say(' + value_text + ',' + value_tag + ');\n';
    return code;
};