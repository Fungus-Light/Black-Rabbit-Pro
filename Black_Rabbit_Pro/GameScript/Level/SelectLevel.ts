/*================Dont Delete This=========================*/
import { IGameLevel } from "JS/Interface/IGameLevel";
import { $SceneLoader } from "JS/SceneLoader/SceneLoader";
import { $Button } from "JS/UI/UI";
import { Debug, Transform, $ } from "JS/Utils/Common"

function Create() { return new SelectLevel(); }
export { Create }

/*=========================================================*/

class SelectLevel implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.LogWarning("Level SelectLevel Start!!!")

        let helloBTN = $Button("helloworld");

        let dialogBTN = $Button("dialogmod");

        let featureBTN = $Button("feature")

        let tweenAnimBTN = $Button("tweenAnim")

        let UISystem = $Button("UISystem")

        helloBTN.RegClickCallBack("click",()=>{
            $SceneLoader().LoadScene("HelloWorld")
        })

        dialogBTN.RegClickCallBack("click", () => {
            $SceneLoader().LoadScene("DialogMod")
        })

        featureBTN.RegClickCallBack("click", () => {
            $SceneLoader().LoadScene("Features")
        })

        tweenAnimBTN.RegClickCallBack("click", () => {
            $SceneLoader().LoadScene("TweenAnimShow")
        })

        UISystem.RegClickCallBack("click",()=>{
            $SceneLoader().LoadScene("ComplexUI")
        })

    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}