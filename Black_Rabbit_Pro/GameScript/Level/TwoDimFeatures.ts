/*================Dont Delete This=========================*/
import { IGameLevel } from "JS/Interface/IGameLevel";
import { $SceneLoader } from "JS/SceneLoader/SceneLoader";
import { Fade } from "JS/Tween/Tween";
import { $Button } from "JS/UI/UI";
import { Debug, Transform, $ } from "JS/Utils/Common"

function Create() { return new TwoDimFeatures(); }
export { Create }

/*=========================================================*/

class TwoDimFeatures implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.LogWarning("Level TwoDimFeatures Start!!!")

        $Button("Back").RegClickCallBack("Click", () => {
            $SceneLoader().LoadScene("SelectLevel")
        })

    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}