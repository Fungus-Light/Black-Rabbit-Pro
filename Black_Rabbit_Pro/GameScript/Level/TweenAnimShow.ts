/*================Dont Delete This=========================*/
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Debug, Transform, $ } from "JS/Utils/Common"
import { Fade, MoveFrom } from "JS/Tween/Tween"
import { JumpOutActive, JumpOverScale } from "JS/Tween/TweenAnim"
import { $Button, $Text } from "JS/UI/UI"
import { $SceneLoader } from "JS/SceneLoader/SceneLoader";

function Create() { return new TweenAnimShow(); }
export { Create }

/*=========================================================*/

class TweenAnimShow implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.LogWarning("Level TweenAnimShow Start!!!")

        let Message = $Text("Message")

        let FadeBTN = $Button("Fade")
        let JumpOutBTN = $Button("JumpOut")
        let JumpOverSizeBTN = $Button("JumpOverScale")
        let MoveBTN = $Button("Move")

        let GlobalCanClick = true

        FadeBTN.RegClickCallBack("click", () => {

            if (GlobalCanClick) {
                GlobalCanClick = false;
                Fade("Avatar", 0, 1, 1, () => {
                    GlobalCanClick = true
                    Message.text = "You Just Fade From 0 to 1"
                })
            }
        })

        JumpOutBTN.RegClickCallBack("click", () => {

            if (GlobalCanClick) {
                GlobalCanClick = false;
                JumpOutActive("Avatar", 1.2, 1, () => {
                    Message.text = "The Avatar Jump Out"
                    GlobalCanClick = true
                })
            }
        })

        JumpOverSizeBTN.RegClickCallBack("click", () => {
            if (GlobalCanClick) {
                GlobalCanClick = false;
                JumpOverScale("Avatar", 1.2, 1, () => {
                    Message.text = "The Avatar Jump Oversize"
                    GlobalCanClick = true
                })
            }
        })

        MoveBTN.RegClickCallBack('click', () => {
            if (GlobalCanClick) {
                GlobalCanClick = false;
                MoveFrom("Avatar", $("leftPos").position, 2, () => {
                    GlobalCanClick = true
                    Message.text = "The Avatar MoveFrom Left"
                })
            }
        })

        $Button("Back").RegClickCallBack("click", () => {
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