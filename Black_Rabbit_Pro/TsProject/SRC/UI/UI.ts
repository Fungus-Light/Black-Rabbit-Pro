import { System, UIHelper, UnityEngine } from "csharp"
import { Debug, UAction } from "Utils/Common";

class Button {
    btn: UnityEngine.UI.Button

    constructor(btn: UnityEngine.UI.Button) {
        this.btn = btn
    }

    RegClickCallBack(tag: string, act: System.Action) {
        this.btn.onClick.AddListener(act)
    }
}
class Text extends UnityEngine.UI.Text { }

class InputField {
    field: UnityEngine.UI.InputField
    constructor(field: UnityEngine.UI.InputField) {
        this.field = field
    }
    SetValue(text: string): void {
        this.field.text = text
    }
    GetValue(): string {
        return this.field.text;
    }
    RegValueChange(tag: string, act: (v: string) => void) {
        this.field.onValueChanged.AddListener(act)
    }
}

function $InputField(name: string): InputField {
    let field = UIHelper.GetInputField(name)
    if (field == null) {
        Debug.LogError("InputField " + name + " Can Not Be Found!!!")
        return;
    }

    return new InputField(field)
}

function $Button(name: string): Button {
    let btn = UIHelper.GetButton(name)
    if (btn == null) {
        Debug.LogError("Buttom " + name + " Can Not Be Found!!!")
        return;
    }

    return new Button(btn);
}

const $Text = UIHelper.GetText

export {
    $InputField,
    InputField,
    $Button,
    Button,
    $Text,
    Text
}