const { UnityEngine, FileHelper, GameObjectHelper } = require('csharp');
const { $typeof } = require("puerts");

const Debug = {
    Log: UnityEngine.Debug.Log,
    Warning: UnityEngine.Debug.LogWarning,
    Error: UnityEngine.Debug.LogError
}

const Vector2 = UnityEngine.Vector2
const Vector3 = UnityEngine.Vector3
const AudioSource = UnityEngine.AudioSource

const ReadTextFile = FileHelper.ReadTextFile
const T = $typeof
const $ = GameObjectHelper.GetTransformByName