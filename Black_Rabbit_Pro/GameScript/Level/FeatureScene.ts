/*================Dont Delete This=========================*/
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Debug, Transform } from "JS/Utils/Common"

function Create() { return new FeatureScene(); }
export { Create }

/*=========================================================*/

class FeatureScene implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.LogWarning("Level FeatureScene Start!!!")
    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}