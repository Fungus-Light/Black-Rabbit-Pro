/*==============Dont Delete This============================*/
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
        this.TestCube = $("Cube")
    }
    OnUpdate(): void {
        let V = Vector3.op_Multiply(this.TestCube.up, this.TestSpeed);
        this.TestCube.Rotate(V);
    }
    OnDestroy(): void {

    }

}

