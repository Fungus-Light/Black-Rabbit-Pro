/*==============Dont Delete This============================*/
import { CreateDialog } from "JS/Dialog/DialogManager";
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Transform, $, Debug, Vector3 } from "JS/Utils/Common"

function Create() { return new Level1(); }
export { Create }

/*===============================================*/

class Level1 implements IGameLevel {
    name: string;
    root: Transform;

    TestCube: Transform;
    TestSpeed: number = 10;

    OnStart(): void {
        Debug.LogWarning("Enter Level1, this is a demo level");

        let flow = CreateDialog()
        flow.SetCallBack(() => {
            Debug.LogWarning("End Talk!!!")
        })
        flow.Say("Hello Black Rabbit")
        flow.Say("This a flow")
        flow.SayDetail("This a Detail say", true, true, true, true, true, null)

        flow.Start()
    }
    OnUpdate(): void {
        // let V = Vector3.op_Multiply(this.TestCube.up, this.TestSpeed);
        // this.TestCube.Rotate(V);
    }
    OnDestroy(): void {

    }

}

