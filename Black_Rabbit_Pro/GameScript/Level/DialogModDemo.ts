/*==============Dont Delete This============================*/
import { $Block, CreateDialog, option } from "JS/Dialog/DialogManager";
import { IGameLevel } from "JS/Interface/IGameLevel";
import { Transform, $, Debug, Vector3, QuitGame, WaitForSeconds } from "JS/Utils/Common"

function Create() { return new DialogModDemo(); }
export { Create }

/*=========================================================*/

class DialogModDemo implements IGameLevel {

    name: string;
    root: Transform;

    TestCube: Transform;
    TestSpeed: number = 0;

    OnStart(): void {
        this.TestCube = $("Cube")
        this.TestCube.gameObject.SetActive(true)

        //#region Define A Dialog
        let FlowA = $Block()
            .SetCallBack(() => {
                Debug.LogWarning("End Talk!!!")
            })
            .Say("Hello Black-Rabbit")
            .Say("This flow shows the features of Dialog Mod.")
            .Say("Will Wait For 60 Frames")
            .WaitForFrames(60)
            .Say("Will Wait for 2 seconds")
            .WaitForSeconds(2)
            .Say("I will make the cube rotate")
            .DoAction(() => {
                this.TestSpeed = 2
            })
            .Say("Faster!!!")
            .DoAction(() => {
                this.TestSpeed = 10
            })
            .Say("SlowDown!!!")
            .DoAction(() => {
                this.TestSpeed = 1
            })
            .Say("Stop!!!")
            .DoAction(() => {
                this.TestSpeed = 0
            })
            .Say("Please Select A Number.")
            .Options([
                option("1", () => {
                    FlowB.Start();
                }),
                option("2", () => {
                    FlowC.Start()
                }),
                option("Select Nothing....", () => {
                    FlowA.Continue();
                })
            ], true)
            .Say("You Select Nothing ....")
            .DoAction(() => {
                FlowEnd.Start();
            })

        //#endregion

        //#region Define B Dialog
        let FlowB = $Block()
            .Say("You Select 1")
            .DoAction(() => {
                FlowEnd.Start();
            })
        //#endregion

        //#region Define C Dialog
        let FlowC = $Block()
            .Say("You Select 2")
            .DoAction(() => {
                FlowEnd.Start()
            })
        //#endregion

        //#region Define End Dialog
        let FlowEnd = $Block()
            .Say("Here is the End Of The Show")
            .Say("Restart Now???")
            .Options([
                option("yes", () => {
                    FlowA.Start()
                }),
                option("no", () => {
                    QuitGame()
                })
            ], false)

        //#endregion

        //Start The Logic
        WaitForSeconds(1, () => {
            FlowA.Start()
        })

    }
    OnUpdate(): void {

    }

    OnFixedUpdate(): void {
        let V = Vector3.op_Multiply(this.TestCube.up, this.TestSpeed);
        this.TestCube.Rotate(V);
    }

    OnDestroy(): void {

    }

}

