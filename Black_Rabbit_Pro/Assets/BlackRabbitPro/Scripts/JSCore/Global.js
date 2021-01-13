/**
 * 这个是全局提供的函数以及类
 * 具体的注释和定义将会在Global.d.ts提供
 */

//引入模块
const { UnityEngine, FileHelper, GameObjectHelper } = require('csharp');
const { $typeof } = require("puerts");

const Debug = {
    Log: UnityEngine.Debug.Log,
    Warning: UnityEngine.Debug.LogWarning,
    Error: UnityEngine.Debug.LogError
}

const Vector2 = UnityEngine.Vector2
const Vector3 = UnityEngine.Vector3

const ReadTextFile = FileHelper.ReadTextFile
const T = $typeof
const $ = GameObjectHelper.GetTransformByName