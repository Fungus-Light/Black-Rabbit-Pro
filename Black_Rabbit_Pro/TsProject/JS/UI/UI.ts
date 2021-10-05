import { System, UIHelper, UnityEngine,UIComponent, UILoader } from "csharp"
import { Debug, GameObject, T, Transform } from "Utils/Common";

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

interface IUIComponet{
    object:GameObject
    component:UIComponent
    uiName:string
    Show():void
    Hide():void
    Close():void
    Open():void
}
class TsUComponent implements IUIComponet{
    object:GameObject
    Q(name:string):Transform{
        return this.component.subObjectsPool.get_Item("#_"+name)
    }
    Q_Button(name:string):Button{
        return new Button(this.Q(name).GetComponent(T(UnityEngine.UI.Button)) as UnityEngine.UI.Button) 
    }
    constructor(name:string){
        this.object = UILoader.LoadUI(name)
        this.uiName = name
        this.component = <UIComponent>this.object.GetComponent(T(UIComponent))
        this.object.SetActive(false)
    }
    OnDestroy():void{

    }
    Close(): void {
        this.OnDestroy()
    }
    Open(): void {
        this.Init()
        this.Show()
    }
    Init(): void {
    }
    Show(): void {
        this.object.SetActive(true)
    }
    Hide(): void {
        this.object.SetActive(false)
    }
    uiName: string;
    component: UIComponent;
}

export {
    $InputField,
    InputField,
    $Button,
    Button,
    $Text,
    Text,
    TsUComponent,
}