/*==============Dont Delete This============================*/
import { CreateDialog, option } from "JS/Dialog/DialogManager";
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
        let FlowA = CreateDialog()
        FlowA.SetCallBack(() => {
            Debug.LogWarning("End Talk!!!")

        })

        FlowA.Say("Hello Black-Rabbit")
        FlowA.Say("This flow shows the features of Dialog Mod.")
        
        FlowA.Say("Will Wait For 60 Frames")
        FlowA.WaitForFrames(60)
        
        FlowA.Say("Will Wait for 2 seconds")
        FlowA.WaitForSeconds(2)

        FlowA.Say("I will make the cube rotate");

        FlowA.DoAction(() => {
            this.TestSpeed = 2
        })

        FlowA.Say("Faster!!!");

        FlowA.DoAction(() => {
            this.TestSpeed = 10
        })

        FlowA.Say("SlowDown!!!");

        FlowA.DoAction(() => {
            this.TestSpeed = 1
        })

        FlowA.Say("Stop!!!");

        FlowA.DoAction(() => {
            this.TestSpeed = 0
        })

        FlowA.Say("Please Select A Number.");

        FlowA.Options([
            option("1", () => {
                FlowB.Start();
            }),
            option("2", () => {
                FlowC.Start()
            }),
            option("Select Nothing....", () => {
                FlowA.Continue();
            })
        ], true);

        FlowA.Say("You Select Nothing ....")
        FlowA.DoAction(()=>{
            FlowEnd.Start();
        })

        //#endregion

        //#region Define B Dialog
        let FlowB = CreateDialog()
        FlowB.Say("You Select 1");
        FlowB.DoAction(() => {
            FlowEnd.Start();
        })
        //#endregion

        //#region Define C Dialog
        let FlowC = CreateDialog()
        FlowC.Say("You Select 2");
        FlowC.DoAction(() => {
            FlowEnd.Start()
        })
        //#endregion

        //#region Define End Dialog
        let FlowEnd = CreateDialog()
        FlowEnd.Say("Here is the End Of The Show");
        FlowEnd.Say("Restart Now???");

        FlowEnd.Options([
            option("yes",()=>{
                FlowA.Start()
            }),
            option("no",()=>{
                QuitGame()
            })
        ],false)

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

