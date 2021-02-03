import { UnityEngine, GameObjectHelper, CommonJsCall, System } from "csharp";
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

function PlayMusic(tag:string,cb:System.Action){

}

function PlaySound(tag:string,cb:System.Action){
    
}

/*========================= */

class Input extends UnityEngine.Input { }
const KeyCode = UnityEngine.KeyCode

export {
    Debug,
    Vector3,
    Vector2,
    GameTime,
    Transform,
    UAction,
    Input,
    KeyCode,
    T,
    $,
    SetActive,
    QuitGame,
    WaitForFrames,
    WaitForSeconds,
    WaitForSecondsRealtime
}