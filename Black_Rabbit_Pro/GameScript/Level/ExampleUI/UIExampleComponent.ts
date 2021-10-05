import { TsUComponent } from "JS/UI/UI";
import { Debug } from "JS/Utils/Common";

class ExampleComponent extends TsUComponent{
    Init(){
        Debug.Log("in ExampleComponent")
        this.Q_Button("Button").RegClickCallBack("click",()=>{
            Debug.Log("Click Me!!!")
        })
    }
}

let UIExampleComponent = new ExampleComponent("ExampleComponent")
export{
    UIExampleComponent
}