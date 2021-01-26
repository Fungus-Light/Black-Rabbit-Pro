/*================Dont Delete This=========================*/
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Debug, Transform, WaitForSeconds } from "JS/Utils/Common"
import { $Timeline } from "JS/Playable/Timeline"
import { CreateDialog } from "JS/Dialog/DialogManager";
import { $Trigger } from "JS/Trigger/Trigger";
import { GameType } from "csharp";

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