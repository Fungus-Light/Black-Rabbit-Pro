/*================Dont Delete This=========================*/
import { $ExampleComponent} from "ExampleUI/UIExampleComponent";
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
        let UIExampleComponent = $ExampleComponent()
        UIExampleComponent.Open()
    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}