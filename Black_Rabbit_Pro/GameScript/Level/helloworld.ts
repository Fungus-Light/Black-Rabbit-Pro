/*================Dont Delete This=========================*/
import { $Block } from "JS/Dialog/DialogManager";
import { IGameLevel } from "JS/Interface/IGameLevel";
import { $SceneLoader } from "JS/SceneLoader/SceneLoader";
import { $Button } from "JS/UI/UI";
import { Debug, Transform , $ } from "JS/Utils/Common"

function Create() { return new helloworld(); }
export { Create }

/*=========================================================*/

class helloworld implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.LogWarning("Level helloworld Start!!!")
        let SayHello = $Block()
        SayHello.Say("Hello World!!!");
        let BTNA =$Button("BTNA")
        BTNA.RegClickCallBack("click",()=>{
            SayHello.Start()
        })

        $Button("Back").RegClickCallBack("click",()=>{
            $SceneLoader().LoadScene("SelectLevel")
        });
    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}