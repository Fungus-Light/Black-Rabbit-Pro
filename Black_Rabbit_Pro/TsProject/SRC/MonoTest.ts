import * as CS from "csharp"
import { $typeof } from "puerts"

class Rotate {

    public bindTo;
    public speed = 50

    constructor(bindTo: CS.JsBehaviour) {
        this.bindTo = bindTo;
        this.bindTo.JsStart = () => this.OnStart();
        this.bindTo.JsUpdate = () => this.OnUpdate();
        this.bindTo.JsOnDestroy = () => this.OnDestroy();
    }

    public OnStart() {
        console.log("Start it ")
    }

    public OnUpdate() {
        //js不支持操作符重载所以Vector3的乘这么用
        let r = CS.UnityEngine.Vector3.op_Multiply(CS.UnityEngine.Vector3.up, CS.UnityEngine.Time.deltaTime * this.speed);
        this.bindTo.transform.Rotate(r);
    }

    public OnDestroy() {
        console.log('onDestroy...');
    }
}

function Init(bindTo: CS.JsBehaviour) {
    new Rotate(bindTo);
}

export {
    Init
}