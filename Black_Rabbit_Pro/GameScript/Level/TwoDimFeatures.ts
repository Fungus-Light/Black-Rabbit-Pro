/*================Dont Delete This=========================*/
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Debug, Transform, $ } from "JS/Utils/Common"

function Create() { return new TwoDimFeatures(); }
export { Create }

/*=========================================================*/

class TwoDimFeatures implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.LogWarning("Level TwoDimFeatures Start!!!")

        

    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}