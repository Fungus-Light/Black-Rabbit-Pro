import { SayDialog, $SayDialog } from "Dialog/SayDialog"
import { $, AudioClip } from "Utils/Common";

/**
 * Manage A Dialog FLow
 */
class DialogManager {
    FlowList: Array<any>
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
    Say(text: string, clearPrevious?: boolean, waitForInput?: boolean, fadeWhenDone?: boolean, stopVoiceover?: boolean, waitForVO?: boolean, clip?: AudioClip): void {
        if (clearPrevious == null) {
            clearPrevious = true
        }
        if (waitForInput == null) {
            waitForInput = true
        }

        if (fadeWhenDone == null) {
            fadeWhenDone = true
        }

        if (stopVoiceover == null) {
            stopVoiceover = true
        }

        if (waitForVO == true) {
            waitForVO = true
        }
        if(clip==null){
            clip=null
        }

        this.FlowList.push(() => {
            $SayDialog().gameObject.SetActive(true)
            $SayDialog().Say(text, clearPrevious, waitForInput, fadeWhenDone, stopVoiceover, waitForVO, clip, () => {
                this.Gonext()
            })
        })
    }

    private Gonext(): void {
        if (this.FlowList.length > 0) {
            this.FlowList.shift()
        }
        if (this.FlowList.length > 0) {
            this.FlowList[0]()
        }
    }

    Start(): void {
        if (this.FlowList.length > 0) {
            this.FlowList[0]()
        }
    }

}

function CreateDialog() {
    return new DialogManager;
}

export {
    DialogManager,
    CreateDialog
}