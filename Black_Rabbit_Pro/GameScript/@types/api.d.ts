
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
import { System } from "csharp";
import { Character } from "JS/Dialog/SayDialog";
import { CreateSingleOption, singleOption } from "JS/Dialog/OptionDialog";
import { AudioClip } from "JS/Utils/Common";
const option: typeof CreateSingleOption;
/**
 * Manage A Dialog FLow
 */
class DialogManager {
    index: number;
    FlowList: Array<System.Action>;
    CB: any;
    constructor();
    Options(options: Array<singleOption>, pauseHere: boolean): void;
    Say(text: string): void;
    Say(text: string, dialogName: string): void;
    Say(text: string, dialogName: string, character: Character): void;
    Say(text: string, dialogName: string, character: Character, clearPrevious: boolean, waitForInput: boolean, fadeWhenDone: boolean, stopVoiceover: boolean, waitForVO: boolean, clip: AudioClip): void;
    WaitForFrames(count: number): void;
    WaitForSeconds(count: number): void;
    WaitForSecondsUnscaled(count: number): void;
    DoAction(action: System.Action): void;
    /**
     * Set The CallBack When Flow is End
     * @param cb
     */
    SetCallBack(cb: any): void;
    Continue(): void;
    private Gonext;
    /**
     * Start A FLow
     */
    Start(): void;
}
function CreateDialog(): DialogManager;

}

declare module "JS/Dialog/OptionDialog"{
import { Fungus, System } from "csharp";
class OptionDialog extends Fungus.MenuDialog {
}
const $OptionDialog: typeof Fungus.MenuDialog.GetMenuDialog;
class singleOption {
    text: string;
    act: System.Action;
    optionDialogName: string;
    interactable: boolean;
    hideWhenClick: boolean;
    constructor(_text: string, _act: System.Action, _optDN: string, _intAct: boolean, _hideWhenC: boolean);
}
function CreateSingleOption(text: string): singleOption;
function CreateSingleOption(text: string, act: System.Action): singleOption;
function CreateSingleOption(text: string, act: System.Action, optionDialogName: string): singleOption;

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
const WaitForFrames: typeof CommonJsCall.WaitForFrames;
const WaitForSeconds: typeof CommonJsCall.WaitForSeconds;
const WaitForSecondsRealtime: typeof CommonJsCall.WaitForSecondsRealtime;

}
