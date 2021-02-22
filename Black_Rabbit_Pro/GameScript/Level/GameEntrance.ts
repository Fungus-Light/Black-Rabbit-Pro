/*================Dont Delete This=========================*/
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Debug, Transform } from "JS/Utils/Common"

function Create() { return new GameEntrance(); }
export { Create }

/*=========================================================*/

class GameEntrance implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.LogWarning("Level GameEntrance Start!!!")
    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}