import { Fungus, System } from "csharp"

class OptionDialog extends Fungus.MenuDialog { }

const $OptionDialog = OptionDialog.GetMenuDialog

class singleOption {
    text: string
    act: System.Action
    optionDialogName: string
    interactable: boolean
    hideWhenClick: boolean

    constructor(_text: string, _act: System.Action, _optDN: string, _intAct: boolean, _hideWhenC: boolean) {
        this.text = _text;
        this.act = _act;
        this.optionDialogName = _optDN
        this.interactable = _intAct
        this.hideWhenClick = _hideWhenC
    }
}

function CreateSingleOption(text:string):singleOption
function CreateSingleOption(text: string, act: System.Action):singleOption
function CreateSingleOption(text: string, act: System.Action,optionDialogName: string):singleOption
function CreateSingleOption(text: string, act?: System.Action, optionDialogName?: string, interActable?: boolean, hideWhenClick?: boolean):singleOption {
    if(act==undefined){
        act=()=>{}
    }

    if(optionDialogName==undefined){
        optionDialogName=""
    }

    if(interActable==undefined){
        interActable=true
    }

    if(hideWhenClick==undefined){
        hideWhenClick=false
    }
    
    return new singleOption(text, act, optionDialogName, interActable, hideWhenClick)
}

export {
    OptionDialog,
    $OptionDialog,
    singleOption,
    CreateSingleOption
}