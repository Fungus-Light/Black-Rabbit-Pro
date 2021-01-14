import { UnityEngine } from "csharp";

import { $typeof } from "puerts"

class Debug extends UnityEngine.Debug { }

class Vector3 extends UnityEngine.Vector3 { }

class Vector2 extends UnityEngine.Vector2 { }

const T = $typeof

class GameTime extends UnityEngine.Time { }

export {
    Debug,
    Vector3,
    Vector2,
    T,
    GameTime
}