/*================Dont Delete This=========================*/
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Debug, Transform, WaitForSeconds } from "JS/Utils/Common"
import { $Timeline } from "JS/Playable/Timeline"
import { CreateDialog } from "JS/Dialog/DialogManager";

function Create() { return new FeatureScene(); }
export { Create }

/*=========================================================*/

class FeatureScene implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.LogWarning("Level FeatureScene Start!!!")

        

        WaitForSeconds(1, () => {
            
        })

    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}