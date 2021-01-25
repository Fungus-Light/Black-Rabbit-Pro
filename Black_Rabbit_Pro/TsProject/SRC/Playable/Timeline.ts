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
    isReverse: false
    CallBacks: Array<UAction>
    ReCallBacks: Array<UAction>
    constructor(pd: PlayableDirector) {
        this.PD = pd
        this.CallBacks = new Array<UAction>()
        this.ReCallBacks = new Array<UAction>()
        this.PD.add_stopped(() => {
            Debug.LogWarning("Timeline End")
        })
    }
    Play(): void {
        this.PD.Play()
    }
    Pause(): void {
        this.PD.Pause()
    }
    Reverse(): void {

    }
    Stop(): void {
        this.PD.Stop();
    }
}

export {
    PlayableDirector,
    $Timeline,
    Timeline
}