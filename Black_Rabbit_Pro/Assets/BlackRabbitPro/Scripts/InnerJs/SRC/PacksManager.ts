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
    let packDir = new DirectoryInfo(Path.Combine(Application.dataPath, "Games").replace("\\", "/"))
    let Games = packDir.GetDirectories()
    for (let i = 0; i < Games.Length; i++) {
        let game = Games.get_Item(i);
        let configFile = Path.Combine("Assets", "Games", game.Name, "config.asset");
        if (File.Exists(configFile)) {

            let config = AssetDatabase.LoadAssetAtPath(configFile, T(PackConfig)) as PackConfig;

            if (config.entrance == null) {
                Debug.LogError(configFile + " must asign entrance!!!");
            }
            else {
                let Files = game.GetFiles()
                for (let j = 0; j < Files.Length; j++) {
                    let file = Files.get_Item(j);
                    if (file.Extension === ".unity") {
                        let scene = AssetImporter.GetAtPath(Path.Combine("Assets/Games", game.Name, file.Name).replace("\\", "/")) as AssetImporter
                        scene.assetBundleName = game.Name.toLowerCase()
                    }
                }
                // foreach (FileInfo file in game.GetFiles())
                // {
                //     if (file.Extension == ".unity")
                //     {
                //         AssetImporter scene = AssetImporter.GetAtPath(Path.Combine("Assets/Games", game.Name, file.Name).Replace("\\", "/"));
                //         scene.assetBundleName = game.Name.ToLower();
                //     }
                // }
            }


        } else {
            Debug.LogError("Please Init Packs First!!!");
        }
    }
}

export {
    InitPacks,
    ConfigurePacks
}