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

        let Introduce = CreateDialog()
        Introduce.Say("We Will Play A Timeline")
        Introduce.DoAction(() => {
            StartScene.Play()
        })

        let ReverseIntro = CreateDialog()
        ReverseIntro.Say("We Will Reverse A Timeline")
        ReverseIntro.DoAction(() => {
            StartScene.Reverse()
        })

        let StartScene = $Timeline("StartTimeline");
        StartScene.RegStopCallBack("talkB", () => {
            Debug.LogWarning("This is A Call Back")
            ReverseIntro.Start()
        });
        StartScene.RegReverStopCallBack("End",()=>{
            Debug.LogWarning("This is A Reverse Call Back")
        })

        WaitForSeconds(1, () => {
            Introduce.Start()
        })

    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}