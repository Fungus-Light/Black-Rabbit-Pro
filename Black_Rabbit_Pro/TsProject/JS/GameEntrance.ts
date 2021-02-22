/**
 * This is where the game begin
 * 游戏入口脚本
 */
import { Debug, Transform, WaitForSeconds, T } from "Utils/Common"
import { FadeUIGroup } from "Tween/Tween"
import { IGameLevel } from "Interface/IGameLevel";
import { UnityEngine, FileHelper, System, IScenesLoader, GameObjectPool } from "csharp";
import { $SceneLoader } from "SceneLoader/SceneLoader";

function Create() { return new GameEntrance(); }
export { Create }

/*=========================================================*/

class GameConfig {
    v: number
    version: string
    resolution: {
        w: number,
        h: number
    }
    fullscreen: boolean
    entranceBundle: string
}

class GamePack {
    name: string
    levels: Array<string>
    entrance: string
}

const Resources = UnityEngine.Resources

class AssetBundle extends UnityEngine.AssetBundle { }

class Path extends System.IO.Path { }

class Application extends UnityEngine.Application { }

const InitGameObjct = UnityEngine.GameObject.Instantiate

class SceneManager extends UnityEngine.SceneManagement.SceneManager { }

class GameEntrance implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.Log("Now Using Black-Rabbit");
        Debug.LogWarning("Now Init Env");
        let configStr = FileHelper.ReadStreamTextFile("GameConfig.json")
        console.log(configStr)

        let Config: GameConfig = JSON.parse(configStr) as GameConfig

        console.log("Game Version :" + Config.version)

        let FullScreenMode = UnityEngine.FullScreenMode.Windowed
        if (Config.fullscreen) {
            FullScreenMode = UnityEngine.FullScreenMode.FullScreenWindow
        }
        UnityEngine.Screen.SetResolution(Config.resolution.w, Config.resolution.h, FullScreenMode, 60)

        let GameEnv = Resources.Load("Core/GameEnv") as UnityEngine.GameObject
        InitGameObjct(GameEnv)

        let SL = Resources.Load("SceneLoader") as UnityEngine.GameObject
        let Loader = InitGameObjct(SL) as UnityEngine.GameObject
        Loader.name = "$_SceneLoader"
        GameObjectPool.Instance.gameObjectPool.Add(Loader.transform);

        WaitForSeconds(1, () => {

            FadeUIGroup("LogoUI", 0, 1, 1, () => {
                Debug.LogWarning("Now Loading the Game !!!")
                let EntranceBundleName = Config.entranceBundle;
                let PacksConfigText = FileHelper.ReadStreamTextFile("GamePacks.json")
                let GamePacks = JSON.parse(PacksConfigText) as Array<GamePack>

                let EntranceSceneName = null

                GamePacks.forEach((pack) => {
                    if (pack.name == EntranceBundleName) {
                        EntranceSceneName = pack.entrance
                    }
                })

                if (EntranceSceneName != null) {
                    let EntranceBundle = AssetBundle.LoadFromFile(Path.Combine(Application.dataPath, "StreamingAssets", "GamePacks", EntranceBundleName))
                    let ScenePaths = EntranceBundle.GetAllScenePaths();
                    let EntranceScenePath = null;
                    for (let i = 0; i < ScenePaths.Length; i++) {
                        Debug.Log(ScenePaths.get_Item(i))
                        if (ScenePaths.get_Item(i).includes(EntranceSceneName)) {
                            EntranceScenePath = ScenePaths.get_Item(i)
                            break;
                        }
                    }
                    if (EntranceScenePath != null) {
                        $SceneLoader().LoadScene(EntranceScenePath);
                    } else {
                        Debug.LogError("Can Not Find Entrance Scene Path");
                    }
                } else {
                    Debug.LogError("Can Not Find " + EntranceSceneName + " Entance Scene");
                }

            })
        })

    }
    OnUpdate(): void {

    }
    OnFixedUpdate(): void {

    }
    OnDestroy(): void {

    }

}