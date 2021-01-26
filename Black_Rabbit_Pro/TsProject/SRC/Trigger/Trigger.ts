import { Black_Rabbit, GameType, ITrigger, System, TriggerHelper } from "csharp"
import { Debug } from "Utils/Common";

const $Outline = Black_Rabbit.SimpleOutline.GetOutLineObj
class Outline extends Black_Rabbit.SimpleOutline { }

function $Trigger(name: string, type: GameType): Trigger {
    let trigger = TriggerHelper.GetTrigger(name);

    if (trigger != null) {
        return new Trigger(trigger, type)
    } else {
        Debug.LogError("Can not find Trigger " + name);
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

}

export {
    $Outline,
    Outline,
    $Trigger,
    Trigger
}