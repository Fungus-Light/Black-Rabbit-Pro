import { $SceneLoader } from "JS/SceneLoader/SceneLoader";
import { TsUComponent } from "JS/UI/UI";
import { Debug } from "JS/Utils/Common";

class ExampleComponent extends TsUComponent{
    Init(){
        Debug.Log("in ExampleComponent")
        this.Q_Button("Button").RegClickCallBack("click",()=>{
            Debug.Log("Click Me!!!")
        })
        this.Q_Button("Back").RegClickCallBack("",()=>{
            $SceneLoader().LoadScene("SelectLevel")
        })
    }
    Update(){
        Debug.Log("Yes Yes!!!")
    }

    OnDestroy(){
        super.OnDestroy()
        Debug.Log("I Die")
    }
}

function $ExampleComponent(){
    return new ExampleComponent("ExampleComponent")
}

export{
    $ExampleComponent
}