Blockly.Lua['log'] = function (block) {
    let text_message = block.getFieldValue('message');
    // TODO: Assemble Lua into code variable.
    let code = 'Debug.Log("' + text_message + '")\n';
    return code;
};

Blockly.Lua['warning'] = function (block) {
    let text_message = block.getFieldValue('message');
    // TODO: Assemble Lua into code variable.
    let code = 'Debug.Warning("' + text_message + '")\n';
    return code;
};

Blockly.Lua['error'] = function (block) {
    let text_name = block.getFieldValue('NAME');
    // TODO: Assemble Lua into code variable.
    let code = 'Debug.Error("' + text_name + '")\n';
    return code;
};

Blockly.Lua['wait_for_seconds'] = function (block) {
    var number_time = block.getFieldValue('time');
    var statements_actions = Blockly.Lua.statementToCode(block, 'actions');
    // TODO: Assemble Lua into code variable.
    var code =
        `
    self:DelayCall(${number_time}, function() ${statements_actions}
    end)
    `;
    return code;
};

Blockly.Blocks['setsoundpath'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set Sound Bundle as :")
            .appendField(new Blockly.FieldTextInput("xxx"), "path");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Lua['setsoundpath'] = function (block) {
    var text_path = block.getFieldValue('path');
    // TODO: Assemble JavaScript into code variable.
    var code = `
    function PlayCV(name, cb)
        CS.LuaCall.PlaySound("${text_path}/Sound/" .. Global.Lang, name, false, cb, 1, AUDIO_CV)
    end
    `;
    
    return code;
};

Blockly.Lua['playbgm'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble Lua into code variable.
    var code = `
    PlayMusic("Hall/Sound/Bg", "${text_name}")
    `;
    return code;
};

Blockly.Lua['playcv'] = function (block) {
    var text_cv = block.getFieldValue('cv');
    // TODO: Assemble Lua into code variable.
    var code = `PlayCV("${text_cv}")`;
    return code;
};

Blockly.Lua['playcv_cb'] = function (block) {
    var text_cv = block.getFieldValue('cv');
    var statements_name = Blockly.Lua.statementToCode(block, 'NAME');
    // TODO: Assemble Lua into code variable.
    var code = `
    PlayCV("${text_cv}", function()
        ${statements_name}
    end)
    `;
    return code;
};

Blockly.Lua['playtimeline'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble Lua into code variable.
    var code = `self:PlayTimeLine(${text_name})`;
    return code;
};

Blockly.Lua['playtimeline_cb'] = function (block) {
    var text_name = block.getFieldValue('NAME');
    var statements_cb = Blockly.Lua.statementToCode(block, 'cb');
    // TODO: Assemble Lua into code variable.
    var code = `
    self:PlayTimeLine(${text_name}, function()
        ${statements_cb}
    end)
    `;
    return code;
};

Blockly.Blocks['showtitle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Show Title :")
            .appendField(new Blockly.FieldTextInput("Tt_XXX"), "title")
            .appendField(" in color : ")
            .appendField(new Blockly.FieldColour("#33ffff"), "color");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Lua['showtitle'] = function (block) {
    var text_title = block.getFieldValue('title');
    var colour_color = block.getFieldValue('color');
    // TODO: Assemble Lua into code variable.
    var code = `EventMgr:Send(EventMsg.ShowUITitle, { "${text_title}", "${colour_color}" })`;
    return code;
};