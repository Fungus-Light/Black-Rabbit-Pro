import { CommonJsCall, System } from "csharp";
import { SayDialog, $SayDialog, Character } from "Dialog/SayDialog"
import { $OptionDialog, OptionDialog } from "Dialog/OptionDialog"
import { $, AudioClip, Debug } from "Utils/Common";

/**
 * Manage A Dialog FLow
 */
class DialogManager {
    index: number
    FlowList: Array<System.Action>
    CB: any
    constructor() {
        this.FlowList = new Array<any>()
        this.index = 0
    }

    Option(text: string): void
    Option(text: string, action: System.Action): void
    Option(text: string, action: System.Action, optionDialogName: string, interactable: boolean, hidewhenclick: boolean): void
    Option(text: string, action?: System.Action, optionDialogName?: string, interactable?: boolean, hidewhenclick?: boolean): void {
        let OptionDialog: OptionDialog = null;

        if (optionDialogName != undefined && optionDialogName != "") {
            OptionDialog = $OptionDialog(optionDialogName);
            if (OptionDialog == null) {
                Debug.LogError("SayDialog " + optionDialogName + "Can Not Be Found!!!")
                return;
            }
        }

        if (OptionDialog == null) {
            OptionDialog = $OptionDialog();
        }

        if (interactable == undefined) {
            interactable = true
        }

        if (hidewhenclick == undefined) {
            hidewhenclick = false
        }

        if (action != undefined) {

            this.FlowList.push(() => {
                OptionDialog.AddOptionTs(text, interactable, hidewhenclick, action)
                this.Gonext()
            })


        } else {

            this.FlowList.push(() => {
                OptionDialog.AddOptionTs(text, interactable, hidewhenclick, () => {})
                this.Gonext()
            })

        }

    }

    Say(text: string): void
    Say(text: string, dialogName: string): void
    Say(text: string, dialogName: string, character: Character): void
    Say(text: string, dialogName: string, character: Character, clearPrevious: boolean, waitForInput: boolean, fadeWhenDone: boolean, stopVoiceover: boolean, waitForVO: boolean, clip: AudioClip): void
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

    WaitForFrames(count: number): void {
        this.FlowList.push(() => {
            CommonJsCall.WaitForFrames(Math.floor(count), () => {
                this.Gonext();
            })
        })
    }

    WaitForSeconds(count: number): void {
        this.FlowList.push(() => {
            CommonJsCall.WaitForSeconds(count, () => {
                this.Gonext();
            })
        })
    }

    WaitForSecondsUnscaled(count: number): void {
        this.FlowList.push(() => {
            CommonJsCall.WaitForSecondsRealtime(count, () => {
                this.Gonext();
            })
        })
    }

    DoAction(action: System.Action) {
        this.FlowList.push(() => {
            CommonJsCall.DoAction(action, () => {
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
        if (this.FlowList.length > 0 && this.index < this.FlowList.length) {
            let step = this.FlowList[this.index]
            this.index++;
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
        this.index = 0;
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