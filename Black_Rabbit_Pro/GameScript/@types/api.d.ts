
declare module "JS/GameEntrance"{
/**
 * This is where the game begin
 * 游戏入口脚本
 */
import { Transform } from "JS/Utils/Common";
import { IGameLevel } from "JS/Interface/IGameLevel";
function Create(): GameEntrance;

class GameEntrance implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void;
    OnUpdate(): void;
    OnFixedUpdate(): void;
    OnDestroy(): void;
}
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

declare module "JS/CameraManager/CameraManager"{
import { CameraManager, ICameraDetector } from "csharp";
const $CameraDetector: typeof CameraManager.GetCameraDetector;

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
    Options(options: Array<singleOption>, pauseHere: boolean): DialogManager;
    Say(text: string): DialogManager;
    Say(text: string, dialogName: string): DialogManager;
    Say(text: string, dialogName: string, character: Character): DialogManager;
    Say(text: string, dialogName: string, character: Character, clearPrevious: boolean, waitForInput: boolean, fadeWhenDone: boolean, stopVoiceover: boolean, waitForVO: boolean, clip: AudioClip): DialogManager;
    WaitForFrames(count: number): DialogManager;
    WaitForSeconds(count: number): DialogManager;
    WaitForSecondsUnscaled(count: number): DialogManager;
    DoAction(action: System.Action): DialogManager;
    /**
     * Set The CallBack When Flow is End
     * @param cb
     */
    SetCallBack(cb: any): DialogManager;
    Continue(): void;
    private Gonext;
    /**
     * Start A FLow
     */
    Start(): void;
}
function CreateDialog(): DialogManager;
const $Block: typeof CreateDialog;

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
import { DialogHelper, Fungus } from "csharp";
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
const $Character: typeof DialogHelper.GetCharacter;

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
    OnFixedUpdate(): void;
    /**
     * Call On Level Destroy
     */
    OnDestroy(): void;
}

}

declare module "JS/Playable/Timeline"{
import { System, UnityEngine } from "csharp";
import { UAction } from "JS/Utils/Common";
class PlayableDirector extends UnityEngine.Playables.PlayableDirector {
}
function $Timeline(name: string): Timeline | null;
class Timeline {
    PD: PlayableDirector;
    isReverse: boolean;
    CallBacks: Array<UAction>;
    ReCallBacks: Array<UAction>;
    constructor(pd: PlayableDirector);
    Play(): void;
    Pause(): void;
    Reverse(): void;
    Stop(): void;
    RegStopCallBack(tag: string, cb: System.Action): void;
    RegReverStopCallBack(tag: string, cb: System.Action): void;
    ReMoveStopCallBack(tag: string): void;
    ReMoveReverseStopCallBack(tag: string): void;
    CleanAllCallBack(): void;
}

}

declare module "JS/ReactUnity/UReact"{
let state: string;

}

declare module "JS/SceneLoader/SceneLoader"{
import { IScenesLoader } from 'csharp';
function $SceneLoader(): IScenesLoader;
function $SceneLoader(name: string): IScenesLoader;

}

declare module "JS/Trigger/Trigger"{
import { Black_Rabbit, GameType, IActionTrigger, ITrigger, System, UnityEngine } from "csharp";
import { UAction } from "JS/Utils/Common";
const $Outline: typeof Black_Rabbit.SimpleOutline.GetOutLineObj;
class Outline extends Black_Rabbit.SimpleOutline {
}
function $Trigger(name: string): Trigger;
function $Trigger(name: string, type: GameType): Trigger;
function $ActionTrigger(name: string): ActionTrigger;
function $ActionTrigger(name: string, type: GameType): ActionTrigger;
function $ActionTrigger(name: string, type: GameType, playerTag: string, keyCode: UnityEngine.KeyCode): ActionTrigger;
class Trigger {
    UTrigger: ITrigger;
    constructor(trigger: ITrigger, type: GameType);
    MakeUseful(): void;
    MakeUseless(): void;
    RegEnterAct(tag: string, cb: System.Action): void;
    RegLeaveAct(tag: string, cb: System.Action): void;
    RemoveEnterAct(tag: string): void;
    RemoveLeaveAct(tag: string): void;
    CleanAllAct(): void;
}
class ActionTrigger {
    ATrigger: IActionTrigger;
    ActionList: Array<UAction>;
    constructor(trigger: IActionTrigger, type: GameType, playerTag: string, keyCode: UnityEngine.KeyCode);
    MakeUseful(): void;
    MakeUseless(): void;
    RegEnterAct(tag: string, cb: System.Action): void;
    RegLeaveAct(tag: string, cb: System.Action): void;
    RegInterAct(tag: string, cb: System.Action): void;
    RemoveEnterAct(tag: string): void;
    RemoveLeaveAct(tag: string): void;
    CleanAllAct(): void;
}

}

declare module "JS/Tween/Tween"{
import { Tweens } from "csharp";
const Fade: typeof Tweens.Fade;
const FadeSprite: typeof Tweens.FadeSprite;
const FadeUIGroup: typeof Tweens.FadeUIGroup;
const FadeColorFromTo: typeof Tweens.FadeColorFromTo;
const MoveTo: typeof Tweens.MoveTo;
const MoveFrom: typeof Tweens.MoveFrom;
const ScaleFromTo: typeof Tweens.ScaleFromTo;

}

declare module "JS/UI/UI"{
import { System, UIHelper, UnityEngine } from "csharp";
class Button {
    btn: UnityEngine.UI.Button;
    constructor(btn: UnityEngine.UI.Button);
    RegClickCallBack(tag: string, act: System.Action): void;
}
class Text extends UnityEngine.UI.Text {
}
class InputField {
    field: UnityEngine.UI.InputField;
    constructor(field: UnityEngine.UI.InputField);
    SetValue(text: string): void;
    GetValue(): string;
    RegValueChange(tag: string, act: (v: string) => void): void;
}
function $InputField(name: string): InputField;
function $Button(name: string): Button;
const $Text: typeof UIHelper.GetText;

}

declare module "JS/Utils/Common"{
import { UnityEngine, GameObjectHelper, CommonJsCall, System, SoundLib } from "csharp";
import { $typeof } from "puerts";
/**
 * Debug Class, Rename Of UnityEngine.Debug
 * 调试类，对UnityEngine.Debug 的导出
 */
class Debug extends UnityEngine.Debug {
}
/**
 * UnityEngine's Vector3
 * Unity的 Vector3
 */
class Vector3 extends UnityEngine.Vector3 {
}
/**
 * Include A Tag And A Unity Action
 * 包含一个标签和一个Action
 */
class UAction {
    tag: string;
    act: System.Action;
    constructor();
    constructor(tag: string, act: System.Action);
}
/**
 * UnityEngine's Vector2
 * Unity的 Vector2
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
/**
 * Get An Obeject's Type
 * 获得一个对象的类型
 */
const T: typeof $typeof;
/**
 * Get A Transform By It's Name
 * 通过名字获得一个物体的Transform组件
 */
const $: typeof GameObjectHelper.GetTransformByName;
function SetActive(trans: Transform, state: boolean): void;
class GameObject extends UnityEngine.GameObject {
}
/**
 * QUit The Game
 * 退出游戏
 */
const QuitGame: typeof CommonJsCall.QuitGame;
/**
 * Wait For Some Frames
 * 等待若干帧
 */
const WaitForFrames: typeof CommonJsCall.WaitForFrames;
/**
 * Wait For Seconds And Do Action , Affected By Time.timescale
 *
 * 等待若干秒后执行 ,受到 timescale影响
 */
const WaitForSeconds: typeof CommonJsCall.WaitForSeconds;
const WaitForSecondsRealtime: typeof CommonJsCall.WaitForSecondsRealtime;
class AudioClip extends UnityEngine.AudioClip {
}
const $SoundLib: typeof SoundLib.GetSoundLib;
function PlayMusic(tag: string, cb: System.Action): void;
function PlaySound(tag: string, cb: System.Action): void;
class Input extends UnityEngine.Input {
}
const KeyCode: typeof UnityEngine.KeyCode;
class Resources extends UnityEngine.Resources {
}
class AssetBundle extends UnityEngine.AssetBundle {
}
class Path extends System.IO.Path {
}
class Application extends UnityEngine.Application {
}
const FullScreenMode: typeof UnityEngine.FullScreenMode;
const InitGameObjct: typeof UnityEngine.Object.Instantiate;
function RegGameObject(obj: GameObject, newName: string): void;

}

declare module "JS/Utils/Components"{
import { UnityEngine } from "csharp";
class AudioSource extends UnityEngine.AudioSource {
}
function $AudioSource(name: string): AudioSource;

}

declare module "JS/Utils/GameConfig"{
import { UnityEngine } from "csharp";
class GameConfig {
    v: number;
    version: string;
    resolution: {
        w: number;
        h: number;
    };
    fullscreen: boolean;
    entranceBundle: string;
    mode: "debug" | "release";
    rate: 60;
}
class GamePack {
    name: string;
    levels: Array<string>;
    entrance: string;
}
const GameCoreObj: {
    GameEnv: string;
};
function ReadGameConfig(): GameConfig;
function ReadPackConfig(): Array<GamePack>;
const SetResolution: typeof UnityEngine.Screen.SetResolution;

}

declare module "JS/Utils/MathMod"{
/**
 * Abselute
 * 绝对值
 */
const ABS: (x: number) => number;
const MIN: (...values: number[]) => number;
const MAX: (...values: number[]) => number;
/**
 * Random Object
 * 随机数对象
 */
const RANDOM: {
    GetRndInteger: (min: number, max: number) => number;
};

}
