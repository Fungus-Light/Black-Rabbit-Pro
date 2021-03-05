/**
 * This is where the game begin
 * 游戏入口脚本
 */
import { Debug, Transform, WaitForSeconds, T, Application, AssetBundle, InitGameObjct, Path, Resources, FullScreenMode, RegGameObject } from "Utils/Common"
import { FadeUIGroup } from "Tween/Tween"
import { IGameLevel } from "Interface/IGameLevel";
import { UnityEngine, FileHelper, GameObjectPool, AssetHelper } from "csharp";
import { $SceneLoader } from "SceneLoader/SceneLoader";
import { GameConfig, GameCoreObj, GamePack, ReadGameConfig, ReadPackConfig, SetResolution } from "Utils/GameConfig";

function Create() { return new GameEntrance(); }
export { Create }

/*=========================================================*/



class SceneManager extends UnityEngine.SceneManagement.SceneManager { }

class GameEntrance implements IGameLevel {
    name: string;
    root: Transform;
    OnStart(): void {
        Debug.Log("Now Using Black-Rabbit");
        Debug.LogWarning("Now Init Env");

        let Config: GameConfig = ReadGameConfig()

        console.log("Game Version :" + Config.version)

        let ScreenMode = FullScreenMode.Windowed
        if (Config.fullscreen) {
            ScreenMode = FullScreenMode.FullScreenWindow
        }

        SetResolution(Config.resolution.w, Config.resolution.h, ScreenMode, Config.rate)

        let GameEnv = Resources.Load(GameCoreObj.GameEnv) as UnityEngine.GameObject
        InitGameObjct(GameEnv)

        let SL = Resources.Load("SceneLoader") as UnityEngine.GameObject
        let Loader = InitGameObjct(SL) as UnityEngine.GameObject

        RegGameObject(Loader, "$_SceneLoader")

        WaitForSeconds(1, () => {

            FadeUIGroup("LogoUI", 0, 1, 1, () => {
                Debug.LogWarning("Now Loading the Game !!!")

                let EntranceBundleName = Config.entranceBundle;
                let GamePacks = ReadPackConfig()

                let EntranceSceneName = null

                GamePacks.forEach((pack) => {
                    if (pack.name == EntranceBundleName) {
                        EntranceSceneName = pack.entrance
                    }
                })

                if (EntranceSceneName != null) {

                    if (Config.mode == "release") {
                        AssetHelper.Instance.loadType = AssetHelper.LoadType.Bundles
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
                            Debug.LogError("Can Not Find EntranceScenePath")
                        }
                    } else {
                        AssetHelper.Instance.loadType = AssetHelper.LoadType.Assets
                        let RealScenePath = Path.Combine("Assets", "Games", EntranceBundleName, EntranceSceneName+".unity")
                        //Debug.LogError(RealScenePath)
                        $SceneLoader().LoadScene(RealScenePath);
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