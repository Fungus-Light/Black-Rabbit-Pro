import { SayDialog, $SayDialog } from "Dialog/SayDialog"
import { $, AudioClip, Debug } from "Utils/Common";

/**
 * Manage A Dialog FLow
 */
class DialogManager {
    FlowList: Array<any>
    CB: any
    constructor() {
        this.FlowList = new Array<any>()
    }

    /**
     * Say Something
     * @param text Content To Say
     * @param clearPrevious will Close Previous Say 
     * @param waitForInput wait For User Click
     * @param fadeWhenDone 
     * @param stopVoiceover 
     * @param waitForVO 
     * @param clip 
     */
    SayDetail(text: string, clearPrevious: boolean, waitForInput: boolean, fadeWhenDone: boolean, stopVoiceover: boolean, waitForVO: boolean, clip: AudioClip): void {
        this.FlowList.push(() => {
            $SayDialog().gameObject.SetActive(true)
            $SayDialog().Say(text, clearPrevious, waitForInput, fadeWhenDone, stopVoiceover, waitForVO, clip, () => {
                this.Gonext()
            })
        })
    }

    Say(text: string) {
        this.FlowList.push(() => {
            $SayDialog().gameObject.SetActive(true)
            $SayDialog().Say(text, true, true, true, true, true, null, () => {
                this.Gonext()
            })
        })
    }

    /**
     * Set The CallBack When Flow is End
     * @param cb 
     */
    SetCallBack(cb: any) {
        this.CB = cb;
        Debug.LogWarning("Call Back Setted")
    }

    private Gonext(): void {
        if (this.FlowList.length > 0) {
            let step = this.FlowList.shift()
            step()
        } else {
            Debug.LogWarning("Nothing To Talk.")
            if(this.CB==null){
                Debug.LogWarning("CB is Nothing")
            }else{
                this.CB()
            }
            
        }
    }

    /**
     * Start A FLow
     */
    Start(): void {
        this.Gonext()
    }

}

function CreateDialog() {
    return new DialogManager;
}

export {
    DialogManager,
    CreateDialog
}