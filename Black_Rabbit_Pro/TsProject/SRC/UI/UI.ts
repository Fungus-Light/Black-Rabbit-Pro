import { UIHelper, UnityEngine } from "csharp"
import { Debug } from "Utils/Common";

class Button {
    btn: UnityEngine.UI.Button

    constructor(btn: UnityEngine.UI.Button) {
        this.btn = btn

        this.btn.onClick.AddListener(()=>{
            
        })
    }
}
class Text extends UnityEngine.UI.Text { }

function $Button(name: string): Button | void {
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