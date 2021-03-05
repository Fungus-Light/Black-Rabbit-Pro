import { LevelRunner } from "csharp"
import { IGameLevel } from "Interface/IGameLevel";
import { Debug } from "Utils/Common"

let _level: IGameLevel = null;
let _name: string = "";

/**
 * Level Loader Load IGameLevel and Run it
 * LevelLoader 加载 IGameLevel 并且运行关卡
 */
class LevelLoader {

    public bindTo: LevelRunner;
    public Level: IGameLevel;

    constructor(bindTo: LevelRunner, name: string, Level: IGameLevel) {
        this.bindTo = bindTo;
        Level.name = name;
        Level.root = bindTo.transform
        this.Level = Level;
        this.bindTo.JsStart = () => this.OnStart();
        this.bindTo.JsUpdate = () => this.OnUpdate();
        this.bindTo.JsOnDestroy = () => this.OnDestroy();
        this.bindTo.JsFixedUpdate = () => this.OnFixedUpdate();
    }

    public OnStart() {
        Debug.LogWarning("Start Load Level " + this.Level.name);
        this.Level.OnStart()
    }

    public OnFixedUpdate() {
        this.Level.OnFixedUpdate();
    }

    public OnUpdate() {
        this.Level.OnUpdate()
    }

    public OnDestroy() {
        Debug.LogWarning('Destroy...' + this.Level.name);
        this.Level.OnDestroy()
    }
}

/**
 * Make A LevelLoader Run
 * @param bindTo A C# LevelRunner
 */
function Init(bindTo: LevelRunner) {
    new LevelLoader(bindTo, _name, _level);
}

/**
 * Set A LevelLoader's Content
 * @param name Level Name
 * @param Level A Level
 */
function SetLevel(name: string, Level: IGameLevel) {
    _name = name;
    _level = Level;
}

export {
    Init,
    SetLevel
}