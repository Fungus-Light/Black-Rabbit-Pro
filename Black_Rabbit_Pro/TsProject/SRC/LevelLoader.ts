import { JsBehaviour } from "csharp"
import { IGameLevel } from "Interface/IGameLevel";
import { GameTime, Vector3, } from "Utils/Common"

class LevelLoader {

    public bindTo: JsBehaviour;
    public Level: IGameLevel;
    public speed = 50

    constructor(bindTo: JsBehaviour, name: string, Level: IGameLevel) {
        this.bindTo = bindTo;
        Level.name = name;
        this.Level = Level;
        this.bindTo.JsStart = () => this.OnStart();
        this.bindTo.JsUpdate = () => this.OnUpdate();
        this.bindTo.JsOnDestroy = () => this.OnDestroy();
    }

    public OnStart() {
        console.log("Start level " + this.Level.name)
    }

    public OnUpdate() {
        //js不支持操作符重载所以Vector3的乘这么用
        let r = Vector3.op_Multiply(Vector3.up, GameTime.deltaTime * this.speed);
        this.bindTo.transform.Rotate(r);
    }

    public OnDestroy() {
        console.log('Destroy...' + this.Level.name);
    }
}

function Init(bindTo: JsBehaviour, name: string, Level: IGameLevel) {
    new LevelLoader(bindTo, name, Level);
}

export {
    Init
}