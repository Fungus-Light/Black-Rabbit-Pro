import { System, TimelineHelper, UnityEngine } from "csharp"
import { Debug, UAction } from "Utils/Common";

class PlayableDirector extends UnityEngine.Playables.PlayableDirector { }

function $Timeline(name: string): Timeline | null {
    let pd = TimelineHelper.GetTimeline(name);
    if (pd != null) {
        return new Timeline(pd);
    } else {
        Debug.LogWarning("GameObject " + name + " Does Not Exist A PlayableDirector Component!!!")
        return null;
    }
}

class Timeline {
    PD: PlayableDirector
    isReverse: boolean
    CallBacks: Array<UAction>
    ReCallBacks: Array<UAction>
    constructor(pd: PlayableDirector) {
        this.isReverse = false
        this.PD = pd
        this.CallBacks = new Array<UAction>()
        this.ReCallBacks = new Array<UAction>()
        this.PD.add_stopped(() => {
            //Debug.LogWarning("Timeline End")
            if (this.isReverse) {
                this.ReCallBacks.forEach(item => {
                    item.act()
                })
            } else {
                this.CallBacks.forEach(item => {
                    item.act()
                })
            }

        })
    }
    Play(): void {
        this.PD.Play()
    }
    Pause(): void {
        this.PD.Pause()
    }
    Reverse(): void {
        this.isReverse = true
        TimelineHelper.ReverseTimeline(this.PD, () => {
            this.isReverse = false
        })
    }
    Stop(): void {
        this.PD.Stop();
    }
    RegStopCallBack(tag: string, cb: System.Action) {
        this.CallBacks.forEach(element => {
            if (element.tag == tag) {
                element.act = cb
                return;
            }
        });
        this.CallBacks.push(new UAction(tag, cb))
    }
    RegReverStopCallBack(tag: string, cb: System.Action) {
        this.ReCallBacks.forEach(element => {
            if (element.tag == tag) {
                element.act = cb
                return;
            }
        })
        this.ReCallBacks.push(new UAction(tag, cb))
    }
    ReMoveStopCallBack(tag: string) {
        for (let i = 0; i < this.CallBacks.length; i++) {
            if (this.CallBacks[i].tag == tag) {
                this.CallBacks.splice(i, 1)
            }
        }
    }
    ReMoveReverseStopCallBack(tag: string) {
        for (let i = 0; i < this.ReCallBacks.length; i++) {
            if (this.ReCallBacks[i].tag == tag) {
                this.ReCallBacks.splice(i, 1)
            }
        }
    }
    CleanAllCallBack() {
        this.CallBacks = new Array<UAction>()
        this.ReCallBacks = new Array<UAction>()
    }
}

export {
    PlayableDirector,
    $Timeline,
    Timeline
}