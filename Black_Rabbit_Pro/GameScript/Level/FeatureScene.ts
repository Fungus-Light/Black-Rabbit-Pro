/*================Dont Delete This=========================*/
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Debug, Input, KeyCode, Transform, WaitForSeconds } from "JS/Utils/Common"
import { $Timeline } from "JS/Playable/Timeline"
import { CreateDialog } from "JS/Dialog/DialogManager";
import { $ActionTrigger, $Trigger } from "JS/Trigger/Trigger";
import { GameType } from "csharp";
import { $Button, $InputField, $Text } from "JS/UI/UI";
import { RANDOM } from "JS/Utils/MathMod";

function Create() { return new FeatureScene(); }
export { Create }

/*=========================================================*/

class FeatureScene implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        let SimpleFlow = CreateDialog()
        SimpleFlow.Say("Hello World")

        Debug.LogWarning("Level FeatureScene Start!!!")

        let BasicTrigger = $Trigger("BasicTrigger", GameType.FPS)
        BasicTrigger.RegEnterAct("Player", () => {
            Debug.LogWarning("Player Enter")
        })

        BasicTrigger.RegLeaveAct("Player", () => {
            Debug.LogWarning("Player Leave")
        });

        let BasicActionTrigger = $ActionTrigger("BasicActionTrigger", GameType.TPS, "Player", KeyCode.E)
        BasicActionTrigger.RegInterAct("talk", () => {
            SimpleFlow.Start()
        })
        BasicActionTrigger.MakeUseful()

        let BTN1 = $Button("BTN1")
        let BTN2 = $Button("BTN2")
        let testText = $Text("testText")

        let testInput = $InputField("input")
        testInput.SetValue(RANDOM.GetRndInteger(1, 100).toString())
        testInput.RegValueChange("ChangeDebug", v => {
            Debug.Log(v)
        })

        BTN1.RegClickCallBack("click", () => {
            //Debug.Log("click1")
            testText.text = "Click BTN1"
        })
        BTN2.RegClickCallBack("click", () => {
            //Debug.Log("click2")

            testText.text = "You Input " + testInput.GetValue()
        })

        WaitForSeconds(1, () => {
            BasicTrigger.MakeUseful()
        })

    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}