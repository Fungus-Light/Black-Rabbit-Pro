/*================Dont Delete This=========================*/
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Debug, Transform, WaitForSeconds } from "JS/Utils/Common"
import { $Timeline } from "JS/Playable/Timeline"
import { CreateDialog } from "JS/Dialog/DialogManager";
import { $Trigger } from "JS/Trigger/Trigger";
import { GameType } from "csharp";
import { $Button, $Text } from "JS/UI/UI";

function Create() { return new FeatureScene(); }
export { Create }

/*=========================================================*/

class FeatureScene implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.LogWarning("Level FeatureScene Start!!!")

        let BasicTrigger = $Trigger("BasicTrigger", GameType.FPS)
        BasicTrigger.RegEnterAct("Player", () => {
            Debug.LogWarning("Player Enter")
        })

        BasicTrigger.RegLeaveAct("Player", () => {
            Debug.LogWarning("Player Leave")
        });

        let BTN1 = $Button("BTN1")
        let BTN2 = $Button("BTN2")
        let testText = $Text("testText")
        BTN1.RegClickCallBack("click", () => {
            //Debug.Log("click1")
            testText.text="Click BTN1"
        })
        BTN2.RegClickCallBack("click",()=>{
            //Debug.Log("click2")
            testText.text="Click BTN2"
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