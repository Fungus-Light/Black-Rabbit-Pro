/*================Dont Delete This=========================*/
import { UIExampleComponent } from "ExampleUI/UIExampleComponent";
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Debug, Transform , $ } from "JS/Utils/Common"

function Create() { return new UISystem(); }
export { Create }

/*=========================================================*/

class UISystem implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.LogWarning("Level UISystem Start!!!")
        UIExampleComponent.Open()
    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}