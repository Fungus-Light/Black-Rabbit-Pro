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
    $Button,
    Button,
    $Text,
    Text
}