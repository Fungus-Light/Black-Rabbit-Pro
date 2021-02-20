
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

Blockly.JavaScript['log'] = function (block) {
    let text_message = block.getFieldValue('message');
    // TODO: Assemble JavaScript into code variable.
    let code = 'Debug.Log(\"' + text_message + '\" )\n';
    return code;
};

Blockly.JavaScript['warning'] = function (block) {
    let text_message = block.getFieldValue('message');

    let code = 'Debug.LogWarning( \"' + text_message + '\" )\n';
    return code;
};

Blockly.JavaScript['error'] = function (block) {
    let text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    let code = 'Debug.LogError( \"' + text_name + '\" )\n';
    return code;
};

//--------------------------------------------

Blockly.JavaScript['wait_for_seconds'] = function (block) {
    let number_time = block.getFieldValue('time');
    let statements_actions = Blockly.JavaScript.statementToCode(block, 'actions');
    // TODO: Assemble JavaScript into code variable.
    let code = 'WaitForSeconds(' + number_time + ', () => {\n' +
        statements_actions +
        '})\n';
    return code;
};

Blockly.JavaScript['comment'] = function (block) {
    var text_comment = block.getFieldValue('comment');
    // TODO: Assemble JavaScript into code variable.
    var code = '//' + text_comment + '\n';
    return code;
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

Blockly.JavaScript['say'] = function (block) {
    var value_text = block.getFieldValue('text');
    var value_tag = block.getFieldValue('tag');
    // TODO: Assemble JavaScript into code variable.
    var code = '$blockname$.Say(\'' + value_text + '\',\'' + value_tag + '\');\n';
    return code;
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

Blockly.JavaScript['option'] = function (block) {
    let text_text = block.getFieldValue('text');
    let statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    let code = 'option(\"' + text_text + '\",()=>{\n' +
        statements_name +
        '}),\n';
    return code;
};

Blockly.JavaScript['block_start'] = function (block) {
    let text_blockname = block.getFieldValue('blockname');
    // TODO: Assemble JavaScript into code variable.
    let code = text_blockname + '.Start();\n';
    return code;
};