import { SayDialog, $SayDialog, Character } from "Dialog/SayDialog"
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
    

    Say(text: string): void
    Say(text: string, dialogName: string): void
    Say(text: string, dialogName: string, character: Character): void
    /**
     * Say Somthing
     * @param text Content
     * @param dialogName The Name Of A SayDialog Obj
     * @param character Specify A Character
     * @param clearPrevious 
     * @param waitForInput 
     * @param fadeWhenDone 
     * @param stopVoiceover 
     * @param waitForVO 
     * @param clip 
     */
    Say(text: string, dialogName?: string,
        character?: Character,
        clearPrevious?: boolean,
        waitForInput?: boolean,
        fadeWhenDone?: boolean,
        stopVoiceover?: boolean,
        waitForVO?: boolean,
        clip?: AudioClip): void {

        let Dialog: SayDialog = null

        if (dialogName != undefined && dialogName != "") {
            Dialog = $SayDialog(dialogName);
            if (Dialog == null) {
                Debug.LogError("SayDialog " + dialogName + "Can Not Be Found!!!")
                return;
            }
        }

        if (Dialog == undefined) {
            Dialog = $SayDialog()
        }

        if (character != undefined) {
            Dialog.SetCharacter(character)
        }

        if (clearPrevious == undefined) {
            clearPrevious = true
        }

        if (waitForInput == undefined) {
            waitForInput = true
        }

        if (fadeWhenDone == undefined) {
            fadeWhenDone = true
        }

        if (stopVoiceover == undefined) {
            stopVoiceover = true
        }

        if (waitForVO == undefined) {
            waitForVO = true
        }

        if (clip == undefined) {
            clip = null
        }

        //Debug.LogWarning(text + " " + fadeWhenDone + " " + clearPrevious + " " + waitForInput + " " + waitForVO + " " + stopVoiceover)

        this.FlowList.push(() => {
            Dialog.gameObject.SetActive(true)
            Dialog.Say(text, clearPrevious, waitForInput, fadeWhenDone, stopVoiceover, waitForVO, clip, () => {
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
            if (this.CB == null) {
                Debug.LogWarning("CB is Nothing")
            } else {
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