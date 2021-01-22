
declare module "JS/GameEntrance"{
/**
 * This is where the game begin
 */

}

declare module "JS/LevelLoader"{
import { LevelRunner } from "csharp";
import { IGameLevel } from "JS/Interface/IGameLevel";
/**
 * Make A LevelLoader Run
 * @param bindTo A C# LevelRunner
 */
function Init(bindTo: LevelRunner): void;
/**
 * Set A LevelLoader's Content
 * @param name Level Name
 * @param Level A Level
 */
function SetLevel(name: string, Level: IGameLevel): void;

}

declare module "JS/Dialog/DialogManager"{
import { Character } from "JS/Dialog/SayDialog";
/**
 * Manage A Dialog FLow
 */
class DialogManager {
    FlowList: Array<any>;
    CB: any;
    constructor();
    Say(text: string): void;
    Say(text: string, dialogName: string): void;
    Say(text: string, dialogName: string, character: Character): void;
    WaitForFrames(count: number): void;
    WaitForSeconds(count: number): void;
    WaitForSecondsUnscaled(count: number): void;
    /**
     * Set The CallBack When Flow is End
     * @param cb
     */
    SetCallBack(cb: any): void;
    private Gonext;
    /**
     * Start A FLow
     */
    Start(): void;
}
function CreateDialog(): DialogManager;

}

declare module "JS/Dialog/SayDialog"{
import { Fungus } from "csharp";
/**
 * Class Of Dialog Panel
 */
class SayDialog extends Fungus.SayDialog {
}
class Character extends Fungus.Character {
}
/**
 * Get Or Create Dialog
 */
const $SayDialog: typeof Fungus.SayDialog.GetSayDialog;

}

declare module "JS/Interface/IGameLevel"{
import { Transform } from "JS/Utils/Common";
/**
 * Basic Level Definition
 */
interface IGameLevel {
    /**
     * Level Name
     */
    name: string;
    /**
     * The Transform Where The Level At
     */
    root: Transform;
    /**
     * Call On Level Start
     */
    OnStart(): void;
    /**
     * Call On Per Monobehaviour Update
     */
    OnUpdate(): void;
    /**
     * Call On Level Destroy
     */
    OnDestroy(): void;
}

}

declare module "JS/Utils/Common"{
import { UnityEngine, GameObjectHelper, CommonJsCall } from "csharp";
import { $typeof } from "puerts";
/**
 * Debug Class, Rename Of UnityEngine.Debug
 */
class Debug extends UnityEngine.Debug {
}
/**
 * UnityEngine's Vector3
 */
class Vector3 extends UnityEngine.Vector3 {
}
/**
 * UnityEngine's Vector2
 */
class Vector2 extends UnityEngine.Vector2 {
}
class Transform extends UnityEngine.Transform {
}
/**
 * UnityEngine's Time Class
 */
class GameTime extends UnityEngine.Time {
}
class AudioClip extends UnityEngine.AudioClip {
}
/**
 * Get An Obeject's Type
 */
const T: typeof $typeof;
/**
 * Get A Transform By It's Name
 */
const $: typeof GameObjectHelper.GetTransformByName;
const QuitGame: typeof CommonJsCall.QuitGame;

}
