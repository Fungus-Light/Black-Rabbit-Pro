import { UnityEngine, GameObjectHelper, CommonJsCall, System, SoundLib, GameObjectPool } from "csharp";
import { $typeof } from "puerts"

/**
 * Debug Class, Rename Of UnityEngine.Debug
 * 调试类，对UnityEngine.Debug 的导出
 */
class Debug extends UnityEngine.Debug { }

/**
 * UnityEngine's Vector3
 * Unity的 Vector3
 */
class Vector3 extends UnityEngine.Vector3 { }

/**
 * Include A Tag And A Unity Action
 * 包含一个标签和一个Action
 */
class UAction {
    tag: string
    act: System.Action

    constructor()
    constructor(tag: string, act: System.Action)
    constructor(tag?: string, act?: System.Action) {
        if (tag == undefined) {
            tag = ""
        }
        if (act == undefined) {
            act = () => { }
        }
        this.tag = tag
        this.act = act
    }
}

/**
 * UnityEngine's Vector2
 * Unity的 Vector2
 */
class Vector2 extends UnityEngine.Vector2 { }

class Transform extends UnityEngine.Transform { }
/**
 * UnityEngine's Time Class
 */
class GameTime extends UnityEngine.Time { }

/**
 * Get An Obeject's Type
 * 获得一个对象的类型
 */
const T = $typeof

/**
 * Get A Transform By It's Name
 * 通过名字获得一个物体的Transform组件
 */
const $ = GameObjectHelper.GetTransformByName

function SetActive(trans: Transform, state: boolean) {
    if (trans != null) {
        trans.gameObject.SetActive(state);
    }
}

class GameObject extends UnityEngine.GameObject { }
/**
 * QUit The Game
 * 退出游戏
 */
const QuitGame = CommonJsCall.QuitGame

/**
 * Wait For Some Frames
 * 等待若干帧
 */
const WaitForFrames = CommonJsCall.WaitForFrames
/**
 * Wait For Seconds And Do Action , Affected By Time.timescale
 * 
 * 等待若干秒后执行 ,受到 timescale影响
 */
const WaitForSeconds = CommonJsCall.WaitForSeconds
const WaitForSecondsRealtime = CommonJsCall.WaitForSecondsRealtime

class AudioClip extends UnityEngine.AudioClip { }

const $SoundLib = SoundLib.GetSoundLib

function PlayMusic(tag: string, cb: System.Action) {
    let clip = SoundLib.GetSoundLib().GetMusic(tag)
}

function PlaySound(tag: string, cb: System.Action) {
    let clip = SoundLib.GetSoundLib().GetSound(tag);
}

/*========================= */

class Input extends UnityEngine.Input { }
const KeyCode = UnityEngine.KeyCode

class Resources extends UnityEngine.Resources { }

class AssetBundle extends UnityEngine.AssetBundle { }

class Path extends System.IO.Path { }

class Application extends UnityEngine.Application { }

const FullScreenMode = UnityEngine.FullScreenMode

const InitGameObjct = UnityEngine.GameObject.Instantiate

function RegGameObject(obj: GameObject, newName: string) {
    if (newName.startsWith("$_") == false) {
        newName = "$_" + newName
    }
    if (GameObjectPool.Instance.gameObjectPool.Contains(obj.transform) == false) {
        if ($(newName) == null) {
            obj.name = newName
            GameObjectPool.Instance.gameObjectPool.Add(obj.transform)
        } else {
            Debug.LogError("Already Exist this name")
        }
    } else {
        Debug.LogError("Already Exist this Obj")
    }

}

export {
    Debug,
    Vector3,
    Vector2,
    GameTime,
    Transform,
    UAction,
    Input,
    AudioClip,
    KeyCode,
    FullScreenMode,
    Resources,
    AssetBundle,
    Path,
    Application,
    GameObject,
    
    RegGameObject,

    T,
    $,
    SetActive,
    QuitGame,
    WaitForFrames,
    WaitForSeconds,
    WaitForSecondsRealtime,

    PlayMusic,
    PlaySound,
    $SoundLib,
    InitGameObjct
}