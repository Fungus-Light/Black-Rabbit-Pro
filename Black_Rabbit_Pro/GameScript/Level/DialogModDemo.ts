/*==============Dont Delete This============================*/
import { CreateDialog } from "JS/Dialog/DialogManager";
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Transform, $, Debug, Vector3, QuitGame, WaitForSeconds } from "JS/Utils/Common"

function Create() { return new Level1(); }
export { Create }

/*===============================================*/

class Level1 implements IGameLevel {
    name: string;
    root: Transform;

    TestCube: Transform;
    TestSpeed: number = 0;

    OnStart(): void {
        Debug.LogWarning("Enter Level1, this is a demo level");

        this.TestCube=$("Cube")

        //#region Define A Dialog
        let flow = CreateDialog()
        flow.SetCallBack(() => {
            Debug.LogWarning("End Talk!!!")
            QuitGame()
        })

        flow.Say("Hello Black-Rabbit")
        flow.Say("This flow shows the features of Dialog Mod.")

        flow.WaitForFrames(360)
        flow.Say("Wait For 360 Frames")

        flow.WaitForSeconds(3)
        flow.Say("Wait for 3 seconds")
        flow.Say("I will make the cube rotate");

        flow.DoAction(() => {
            this.TestSpeed = 2
        })

        flow.Say("Faster!!!");

        flow.DoAction(() => {
            this.TestSpeed = 10
        })

        flow.Say("SlowDown!!!");

        flow.DoAction(() => {
            this.TestSpeed = 1
        })

        flow.Say("Talk is End!!!")

        //#endregion

        //Start The Logic
        WaitForSeconds(1, () => {
            flow.Start()
        })

    }
    OnUpdate(): void {
        let V = Vector3.op_Multiply(this.TestCube.up, this.TestSpeed);
        this.TestCube.Rotate(V);
    }
    OnDestroy(): void {

    }

}

