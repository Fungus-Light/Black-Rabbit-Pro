import { CommonJsCall, UnityEngine } from "csharp"
import { InitGameObjct, RegGameObject, Resources } from "Utils/Common"
import { GameCoreObj } from "Utils/GameConfig"

if (CommonJsCall.Instance == null) {
    let GameEnv = Resources.Load(GameCoreObj.GameEnv) as UnityEngine.GameObject
    InitGameObjct(GameEnv)

    let SL = Resources.Load("SceneLoader") as UnityEngine.GameObject
    let Loader = InitGameObjct(SL) as UnityEngine.GameObject

    RegGameObject(Loader, "$_SceneLoader")
}