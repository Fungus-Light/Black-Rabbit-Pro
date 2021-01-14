import { JsBehaviour } from "csharp"
import { IGameLevel } from "Interface/IGameLevel";
import { Debug } from "Utils/Common"

class LevelLoader {

    public bindTo: JsBehaviour;
    public Level: IGameLevel;
    public speed = 50

    constructor(bindTo: JsBehaviour, name: string, Level: IGameLevel) {
        this.bindTo = bindTo;
        Level.name = name;
        Level.root = bindTo.transform
        this.Level = Level;
        this.bindTo.JsStart = () => this.OnStart();
        this.bindTo.JsUpdate = () => this.OnUpdate();
        this.bindTo.JsOnDestroy = () => this.OnDestroy();
    }

    public OnStart() {
        Debug.LogWarning("Start Level " + this.Level.name);
        this.Level.OnStart()
    }

    public OnUpdate() {
        this.Level.OnUpdate()
    }

    public OnDestroy() {
        Debug.LogWarning('Destroy...' + this.Level.name);
        this.Level.OnDestroy()
    }
}

function Init(bindTo: JsBehaviour, name: string, Level: IGameLevel) {
    new LevelLoader(bindTo, name, Level);
}

export {
    Init
}