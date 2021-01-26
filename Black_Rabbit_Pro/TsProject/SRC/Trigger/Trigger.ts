import { Black_Rabbit, GameType, ITrigger, TriggerHelper } from "csharp"
import { Debug, Transform, UAction, $ } from "Utils/Common";

const $Outline = Black_Rabbit.SimpleOutline.GetOutLineObj
class Outline extends Black_Rabbit.SimpleOutline { }

function $Trigger(name: string, type: GameType): Trigger | void
function $Trigger(name: string, type: GameType, showName: string, showMessage: string): Trigger | void
function $Trigger(name: string, type: GameType, showName: string, showMessage: string, outlineOBJName: string, messagePos: Transform): Trigger | void
function $Trigger(name: string, type: GameType, showName?: string, showMessage?: string, outlineOBJName?: string, messagePos?: Transform): Trigger | void {
    let trigger = TriggerHelper.GetTrigger(name);
    let outlineObj = null;

    if (showName == undefined) {
        showName = "default trigger"
    }

    if (showMessage == undefined) {
        showMessage = "default message"
    }

    if (outlineOBJName != undefined) {
        outlineObj = $Outline(outlineOBJName)
    } else {
        outlineObj = null;
    }


    if (messagePos == undefined) {
        messagePos = $(name).Find("Pos")
        if (messagePos == null) {
            Debug.LogError("Must Have A Child Called 'Pos' ")
            return;
        }
    }

    if (trigger != null) {
        return new Trigger(trigger, showName, showMessage, outlineObj, type, messagePos)
    } else {
        Debug.LogError("Can not find Trigger " + name);
    }
}

class Trigger {
    UTrigger: ITrigger;
    EnterActionList: Array<UAction>
    LeaveActionList: Array<UAction>

    constructor(trigger: ITrigger, name: string, message: string, outLineObj: Black_Rabbit.SimpleOutline, type: GameType, messagePos: Transform) {
        this.EnterActionList = new Array<UAction>()
        this.LeaveActionList = new Array<UAction>()

        this.UTrigger = trigger;
        this.UTrigger.Name = name;
        this.UTrigger.Message = message;
        this.UTrigger.isShow = false;
        this.UTrigger.outlineOBJ = outLineObj;
        this.UTrigger.GameType = type;
        this.UTrigger.MessagePos = messagePos;
        this.UTrigger.EnterAct = () => {
            this.EnterActionList.forEach(item => {
                item.act();
            })
        }
        this.UTrigger.LeaveAct = () => {
            this.LeaveActionList.forEach(item => {
                item.act()
            })
        }

    }

    MakeUseful() {
        this.UTrigger.MakeUseful()
    }

    MakeUseless() {
        this.UTrigger.MakeUseless()
    }

}

export {
    $Outline,
    Outline,
    $Trigger,
    Trigger
}