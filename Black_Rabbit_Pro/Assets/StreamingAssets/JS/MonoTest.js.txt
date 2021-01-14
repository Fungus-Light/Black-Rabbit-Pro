"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init = void 0;
const CS = require("csharp");
class Rotate {
    constructor(bindTo) {
        this.speed = 50;
        this.bindTo = bindTo;
        this.bindTo.JsStart = () => this.OnStart();
        this.bindTo.JsUpdate = () => this.onUpdate();
        this.bindTo.JsOnDestroy = () => this.onDestroy();
    }
    OnStart() {
        console.log("Start it ");
    }
    onUpdate() {
        //js不支持操作符重载所以Vector3的乘这么用
        let r = CS.UnityEngine.Vector3.op_Multiply(CS.UnityEngine.Vector3.up, CS.UnityEngine.Time.deltaTime * this.speed);
        this.bindTo.transform.Rotate(r);
    }
    onDestroy() {
        console.log('onDestroy...');
    }
}
function Init(bindTo) {
    new Rotate(bindTo);
}
exports.Init = Init;
//# sourceMappingURL=MonoTest.js.map