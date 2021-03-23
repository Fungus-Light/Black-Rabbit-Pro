/**
 * This is where the game begin
 * 游戏入口脚本
 */
import { Debug, Transform, WaitForSeconds, T, Application, AssetBundle, InitGameObjct, Path, Resources, FullScreenMode, RegGameObject } from "Utils/Common"
import { Fade, FadeUIGroup } from "Tween/Tween"
import { IGameLevel } from "Interface/IGameLevel";
import { UnityEngine, FileHelper, GameObjectPool, AssetHelper } from "csharp";
import { $SceneLoader } from "SceneLoader/SceneLoader";
import { GameConfig, GameCoreObj, GamePack, ReadGameConfig, ReadPackConfig, SetResolution } from "Utils/GameConfig";

function Create() { return new GameEntrance(); }
export { Create }

/*=========================================================*/

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

        // let GameEnv = Resources.Load(GameCoreObj.GameEnv) as UnityEngine.GameObject
        // InitGameObjct(GameEnv)

        // let SL = Resources.Load("SceneLoader") as UnityEngine.GameObject
        // let Loader = InitGameObjct(SL) as UnityEngine.GameObject

        // RegGameObject(Loader, "$_SceneLoader")

        WaitForSeconds(1, () => {

            Fade("LogoUI", 0, 1, 1, () => {

                WaitForSeconds(1, () => {
                    Debug.LogWarning("Now Loading the Game !!!")

                    let EntranceBundleName = Config.entranceBundle;
                    let GamePacks = ReadPackConfig()

                    let EntranceSceneName: string = null
                    let NeededPack: GamePack = null

                    GamePacks.forEach((pack) => {
                        if (pack.name == EntranceBundleName) {
                            NeededPack = pack
                            EntranceSceneName = pack.entrance
                        }
                    })

                    if (EntranceSceneName != null) {

                        if (Config.mode == "release") {
                            AssetHelper.Instance.loadType = AssetHelper.LoadType.Bundles

                            AssetHelper.Instance.Scenes.Clear()

                            let EntranceBundle = AssetBundle.LoadFromFile(Path.Combine(Application.dataPath, "StreamingAssets", "GamePacks", EntranceBundleName))
                            let ScenePaths = EntranceBundle.GetAllScenePaths();
                            let EntranceScenePath = null;
                            for (let i = 0; i < ScenePaths.Length; i++) {
                                //Debug.Log(ScenePaths.get_Item(i))
                                if (ScenePaths.get_Item(i).toLocaleLowerCase().includes(EntranceSceneName)) {
                                    EntranceScenePath = ScenePaths.get_Item(i)
                                    break;
                                }
                            }

                            NeededPack.levels.forEach(level => {
                                let scenePath = ""
                                for (let i = 0; i < ScenePaths.Length; i++) {
                                    //Debug.Log(ScenePaths.get_Item(i))
                                    if (ScenePaths.get_Item(i).toLocaleLowerCase().includes(level.toLocaleLowerCase())) {
                                        scenePath = ScenePaths.get_Item(i)
                                        break;
                                    }
                                }
                                AssetHelper.Instance.Scenes.Add(level.toLowerCase(), scenePath)
                            })

                            if (EntranceScenePath != null) {
                                $SceneLoader().LoadScene(EntranceSceneName.toLocaleLowerCase());
                            } else {
                                Debug.LogError("Can Not Find EntranceScenePath")
                            }
                        } else {
                            AssetHelper.Instance.loadType = AssetHelper.LoadType.Assets

                            AssetHelper.Instance.Scenes.Clear()

                            NeededPack.levels.forEach(level => {
                                AssetHelper.Instance.Scenes.Add(level.toLowerCase(), Path.Combine("Assets", "Games", EntranceBundleName, level + ".unity"))
                            })

                            //Debug.LogError(RealScenePath)
                            $SceneLoader().LoadScene(EntranceSceneName);
                        }

                    } else {
                        Debug.LogError("Can Not Find " + EntranceSceneName + " Entance Scene");
                    }
                })

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