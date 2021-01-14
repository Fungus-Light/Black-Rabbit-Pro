import { UnityEngine, GameObjectHelper } from "csharp";
import { $typeof } from"puerts"

/**
 * Debug Class, Rename Of UnityEngine.Debug 
 */
class Debug extends UnityEngine.Debug { }

/**
 * UnityEngine's Vector3
 */
class Vector3 extends UnityEngine.Vector3 { }

class Vector2 extends UnityEngine.Vector2 { }

class Transform extends UnityEngine.Transform { }

class GameTime extends UnityEngine.Time { }

const T = $typeof

const $ = GameObjectHelper.GetTransformByName

export {
    Debug,
    Vector3,
    Vector2,
    GameTime,
    Transform,
    T,
    $,
}