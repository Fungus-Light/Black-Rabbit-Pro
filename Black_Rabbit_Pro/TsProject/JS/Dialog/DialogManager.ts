import { CommonJsCall, System } from "csharp";
import { SayDialog, $SayDialog, Character } from "Dialog/SayDialog"
import { $OptionDialog, CreateSingleOption, OptionDialog, singleOption } from "Dialog/OptionDialog"
import { $, AudioClip, Debug } from "Utils/Common";

const option = CreateSingleOption
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

    Options(options: Array<singleOption>, pauseHere: boolean): DialogManager {
        this.FlowList.push(() => {
            options.forEach((item) => {
                let OptionDialog: OptionDialog = null;

                if (item.optionDialogName != "") {
                    OptionDialog = $OptionDialog(item.optionDialogName);
                    if (OptionDialog == null) {
                        Debug.LogError("SayDialog " + item.optionDialogName + "Can Not Be Found!!!")
                        return;
                    }
                }

                if (OptionDialog == null) {
                    OptionDialog = $OptionDialog();
                }

                OptionDialog.AddOptionTs(item.text, item.interactable, item.hideWhenClick, item.act)

            })
            if (pauseHere == false) {
                this.Gonext()
            }
        })
        return this;
    }

    Say(text: string): DialogManager
    Say(text: string, dialogName: string): DialogManager
    Say(text: string, dialogName: string, character: Character): DialogManager
    Say(text: string, dialogName: string, character: Character, clearPrevious: boolean, waitForInput: boolean, fadeWhenDone: boolean, stopVoiceover: boolean, waitForVO: boolean, clip: AudioClip): DialogManager
    Say(text: string, dialogName?: string,
        character?: Character,
        clearPrevious?: boolean,
        waitForInput?: boolean,
        fadeWhenDone?: boolean,
        stopVoiceover?: boolean,
        waitForVO?: boolean,
        clip?: AudioClip): DialogManager {

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

        return this;
    }

    WaitForFrames(count: number): DialogManager {
        this.FlowList.push(() => {
            CommonJsCall.WaitForFrames(Math.floor(count), () => {
                this.Gonext();
            })
        })
        return this;
    }

    WaitForSeconds(count: number): DialogManager {
        this.FlowList.push(() => {
            CommonJsCall.WaitForSeconds(count, () => {
                this.Gonext();
            })
        })
        return this;
    }

    WaitForSecondsUnscaled(count: number): DialogManager {
        this.FlowList.push(() => {
            CommonJsCall.WaitForSecondsRealtime(count, () => {
                this.Gonext();
            })
        })
        return this;
    }

    DoAction(action: System.Action):DialogManager {
        this.FlowList.push(() => {
            CommonJsCall.DoAction(action, () => {
                this.Gonext()
            })
        })
        return this;
    }

    /**
     * Set The CallBack When Flow is End
     * @param cb 
     */
    SetCallBack(cb: any):DialogManager {
        this.CB = cb;
        Debug.LogWarning("Call Back Setted")
        return this;
    }

    Continue(): void {
        this.Gonext();
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

const $Block = CreateDialog

export {
    DialogManager,
    CreateDialog,
    $Block,
    option
}