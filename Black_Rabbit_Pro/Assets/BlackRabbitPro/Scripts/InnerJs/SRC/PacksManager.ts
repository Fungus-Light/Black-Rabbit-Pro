import { UnityEngine, UnityEditor, System, PackConfig } from "csharp"
import { $typeof } from "puerts"

class Debug extends UnityEngine.Debug { }
class DirectoryInfo extends System.IO.DirectoryInfo { }
class Path extends System.IO.Path { }
class Application extends UnityEngine.Application { }
class File extends System.IO.File { }
class FileInfo extends System.IO.FileInfo { }
class ScriptableObject extends UnityEngine.ScriptableObject { }
class AssetDatabase extends UnityEditor.AssetDatabase { }
class AssetImporter extends UnityEditor.AssetImporter { }
class StreamWriter extends System.IO.StreamWriter { }

const T = $typeof

function InitPacks() {
    let packDir = new DirectoryInfo(Path.Combine(Application.dataPath, "Games").replace("\\", "/"))
    let Games = packDir.GetDirectories()
    for (let i = 0; i < Games.Length; i++) {
        let game = Games.get_Item(i);
        let configFile = Path.Combine("Assets", "Games", game.Name, "config.asset");
        if (File.Exists(configFile)) {
            Debug.Log(configFile + " already exists a config file.");
        } else {
            Debug.Log(configFile + " will Be Created");
            AssetDatabase.CreateAsset(ScriptableObject.CreateInstance(T(PackConfig)), configFile)
        }
    }
}

function ConfigurePacks() {

    class Pack {
        name: string
        levels: Array<string>
        entrance: string
    }

    let Packs = new Array<Pack>()


    let packDir = new DirectoryInfo(Path.Combine(Application.dataPath, "Games").replace("\\", "/"))
    let Games = packDir.GetDirectories()
    for (let i = 0; i < Games.Length; i++) {
        let game = Games.get_Item(i);

        let tempPack = new Pack()

        let configFile = Path.Combine("Assets", "Games", game.Name, "config.asset");
        if (File.Exists(configFile)) {
            tempPack.name = game.Name.toLowerCase()
            let config = AssetDatabase.LoadAssetAtPath(configFile, T(PackConfig)) as PackConfig;

            if (config.entrance == null) {
                Debug.LogError(configFile + " must asign entrance!!!");
                return
            }
            else {
                tempPack.entrance = config.entrance.name.toLowerCase()

                let scenes = new Array<string>()

                let Files = game.GetFiles()
                for (let j = 0; j < Files.Length; j++) {
                    let file = Files.get_Item(j);
                    if (file.Extension === ".unity") {

                        let exclude = false

                        for (let k = 0; k < config.exclude.Length; k++) {
                            let s = config.exclude.get_Item(k)
                            if (file.Name.toLowerCase().includes(s.name.toLowerCase())) {
                                exclude = true
                            }
                        }

                        if (exclude == false) {
                            let scene = AssetImporter.GetAtPath(Path.Combine("Assets/Games", game.Name, file.Name).replace("\\", "/")) as AssetImporter
                            scene.assetBundleName = game.Name.toLowerCase();
                            //Debug.LogError(file.Name.replace(".unity", "").toLowerCase())
                            scenes.push(file.Name.replace(".unity", "").toLowerCase())

                        }

                    }
                }

                tempPack.levels = scenes
                Packs.push(tempPack)

            }



        } else {
            Debug.LogError("Please Init Packs First!!!");
            return;
        }

    }

    let str = JSON.stringify(Packs)
    Debug.LogWarning(str)
    let writer = new StreamWriter(Path.Combine(Application.dataPath, "StreamingAssets", "GamePacks.json").replace("\\", "/"))
    writer.Write(str)
    writer.Close()
    Debug.LogWarning("Configure Done!!!")
}

export {
    InitPacks,
    ConfigurePacks
}