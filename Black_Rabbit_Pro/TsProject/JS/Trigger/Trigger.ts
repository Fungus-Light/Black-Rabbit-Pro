import { Black_Rabbit, GameType, IActionTrigger, ITrigger, System, TriggerHelper, UnityEngine } from "csharp"
import { Debug, KeyCode, UAction } from "Utils/Common";

const $Outline = Black_Rabbit.SimpleOutline.GetOutLineObj
class Outline extends Black_Rabbit.SimpleOutline { }

function $Trigger(name: string): Trigger
function $Trigger(name: string, type: GameType): Trigger
function $Trigger(name: string, type?: GameType): Trigger {

    if (type == undefined) {
        type = GameType.TPS
    }

    let trigger = TriggerHelper.GetTrigger(name);

    if (trigger != null) {
        return new Trigger(trigger, type)
    } else {
        Debug.LogError("Can not find Trigger " + name);
    }
}

function $ActionTrigger(name: string): ActionTrigger
function $ActionTrigger(name: string, type: GameType): ActionTrigger
function $ActionTrigger(name: string, type: GameType, playerTag: string, keyCode: UnityEngine.KeyCode): ActionTrigger
function $ActionTrigger(name: string, type?: GameType, playerTag?: string, keyCode?: UnityEngine.KeyCode): ActionTrigger {

    if (type == undefined) {
        type = GameType.TPS
    }

    if (playerTag == undefined) {
        playerTag = "Player"
    }

    if (keyCode == undefined) {
        keyCode = KeyCode.E
    }

    let trigger = TriggerHelper.GetActionTrigger(name);

    if (trigger != null) {
        return new ActionTrigger(trigger, type, playerTag, keyCode)
    } else {
        Debug.LogError("Can not find ActionTrigger " + name);
    }
}

class Trigger {
    UTrigger: ITrigger;

    constructor(trigger: ITrigger, type: GameType) {

        this.UTrigger = trigger;
        this.UTrigger.isUseful = true;
        this.UTrigger.GameType = type;
    }

    MakeUseful() {
        this.UTrigger.MakeUseful()
    }

    MakeUseless() {
        this.UTrigger.MakeUseless()
    }

    RegEnterAct(tag: string, cb: System.Action) {
        if (this.UTrigger.EnterAct.ContainsKey(tag)) {
            this.UTrigger.EnterAct.set_Item(tag, cb);
        } else {
            this.UTrigger.EnterAct.Add(tag, cb)
        }
    }

    RegLeaveAct(tag: string, cb: System.Action) {
        if (this.UTrigger.LeaveAct.ContainsKey(tag)) {
            this.UTrigger.LeaveAct.set_Item(tag, cb);
        } else {
            this.UTrigger.LeaveAct.Add(tag, cb)
        }
    }

    RemoveEnterAct(tag: string) {
        if (this.UTrigger.EnterAct.ContainsKey(tag)) {
            this.UTrigger.EnterAct.Remove(tag);
        }
    }

    RemoveLeaveAct(tag: string) {
        if (this.UTrigger.LeaveAct.ContainsKey(tag)) {
            this.UTrigger.LeaveAct.Remove(tag)
        }
    }

    CleanAllAct() {
        this.UTrigger.EnterAct.Clear();
        this.UTrigger.LeaveAct.Clear();
    }
}

class ActionTrigger {
    ATrigger: IActionTrigger
    ActionList: Array<UAction>
    constructor(trigger: IActionTrigger, type: GameType, playerTag: string, keyCode: UnityEngine.KeyCode) {
        this.ActionList = new Array<UAction>()
        this.ATrigger = trigger
        this.ATrigger.GameType = type
        this.ATrigger.PlayerTag = playerTag
        this.ATrigger.code = keyCode
        this.ATrigger.interActable = false;
        this.ATrigger.isUseful = false;
        this.ATrigger.interAction = () => {
            this.ActionList.forEach(item => {
                item.act()
            })
        }
    }
    MakeUseful() {
        this.ATrigger.MakeUseful()
    }

    MakeUseless() {
        this.ATrigger.MakeUseless()
    }

    RegEnterAct(tag: string, cb: System.Action) {
        if (this.ATrigger.EnterAct.ContainsKey(tag)) {
            this.ATrigger.EnterAct.set_Item(tag, cb);
        } else {
            this.ATrigger.EnterAct.Add(tag, cb)
        }
    }

    RegLeaveAct(tag: string, cb: System.Action) {
        if (this.ATrigger.LeaveAct.ContainsKey(tag)) {
            this.ATrigger.LeaveAct.set_Item(tag, cb);
        } else {
            this.ATrigger.LeaveAct.Add(tag, cb)
        }
    }

    RegInterAct(tag: string, cb: System.Action) {
        this.ActionList.forEach(item => {
            if (item.tag == tag) {
                item.act = cb
                return;
            }
        })
        this.ActionList.push(new UAction(tag, cb))
    }

    RemoveEnterAct(tag: string) {
        if (this.ATrigger.EnterAct.ContainsKey(tag)) {
            this.ATrigger.EnterAct.Remove(tag);
        }
    }

    RemoveLeaveAct(tag: string) {
        if (this.ATrigger.LeaveAct.ContainsKey(tag)) {
            this.ATrigger.LeaveAct.Remove(tag)
        }
    }

    CleanAllAct() {
        this.ATrigger.EnterAct.Clear();
        this.ATrigger.LeaveAct.Clear();
        this.ActionList = new Array<UAction>();
    }

}

export {
    $Outline,
    Outline,
    $Trigger,
    Trigger,
    $ActionTrigger,
    ActionTrigger
}