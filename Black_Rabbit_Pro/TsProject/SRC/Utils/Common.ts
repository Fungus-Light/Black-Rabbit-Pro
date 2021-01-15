import { UnityEngine, GameObjectHelper } from "csharp";
import { $typeof } from "puerts"

/**
 * Debug Class, Rename Of UnityEngine.Debug 
 */
class Debug extends UnityEngine.Debug { }

/**
 * UnityEngine's Vector3
 */
class Vector3 extends UnityEngine.Vector3 { }

/**
 * UnityEngine's Vector2
 */
class Vector2 extends UnityEngine.Vector2 { }

class Transform extends UnityEngine.Transform { }
/**
 * UnityEngine's Time Class
 */
class GameTime extends UnityEngine.Time { }

class AudioClip extends UnityEngine.AudioClip { }

/**
 * Get An Obeject's Type
 */
const T = $typeof

/**
 * Get A Transform By It's Name
 */
const $ = GameObjectHelper.GetTransformByName



export {
    Debug,
    Vector3,
    Vector2,
    GameTime,
    AudioClip,
    Transform,
    T,
    $,
}