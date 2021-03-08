"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurePacks = exports.InitPacks = void 0;
const csharp_1 = require("csharp");
const puerts_1 = require("puerts");
class Debug extends csharp_1.UnityEngine.Debug {
}
class DirectoryInfo extends csharp_1.System.IO.DirectoryInfo {
}
class Path extends csharp_1.System.IO.Path {
}
class Application extends csharp_1.UnityEngine.Application {
}
class File extends csharp_1.System.IO.File {
}
class FileInfo extends csharp_1.System.IO.FileInfo {
}
class ScriptableObject extends csharp_1.UnityEngine.ScriptableObject {
}
class AssetDatabase extends csharp_1.UnityEditor.AssetDatabase {
}
class AssetImporter extends csharp_1.UnityEditor.AssetImporter {
}
class StreamWriter extends csharp_1.System.IO.StreamWriter {
}
const T = puerts_1.$typeof;
function InitPacks() {
    let packDir = new DirectoryInfo(Path.Combine(Application.dataPath, "Games").replace("\\", "/"));
    let Games = packDir.GetDirectories();
    for (let i = 0; i < Games.Length; i++) {
        let game = Games.get_Item(i);
        let configFile = Path.Combine("Assets", "Games", game.Name, "config.asset");
        if (File.Exists(configFile)) {
            Debug.Log(configFile + " already exists a config file.");
        }
        else {
            Debug.Log(configFile + " will Be Created");
            AssetDatabase.CreateAsset(ScriptableObject.CreateInstance(T(csharp_1.PackConfig)), configFile);
        }
    }
}
exports.InitPacks = InitPacks;
function ConfigurePacks() {
    class Pack {
    }
    let Packs = new Array();
    let packDir = new DirectoryInfo(Path.Combine(Application.dataPath, "Games").replace("\\", "/"));
    let Games = packDir.GetDirectories();
    for (let i = 0; i < Games.Length; i++) {
        let game = Games.get_Item(i);
        let tempPack = new Pack();
        let configFile = Path.Combine("Assets", "Games", game.Name, "config.asset");
        if (File.Exists(configFile)) {
            tempPack.name = game.Name.toLowerCase();
            let config = AssetDatabase.LoadAssetAtPath(configFile, T(csharp_1.PackConfig));
            if (config.entrance == null) {
                Debug.LogError(configFile + " must asign entrance!!!");
                return;
            }
            else {
                tempPack.entrance = config.entrance.name.toLowerCase();
                let scenes = new Array();
                let Files = game.GetFiles();
                for (let j = 0; j < Files.Length; j++) {
                    let file = Files.get_Item(j);
                    if (file.Extension === ".unity") {
                        let exclude = false;
                        for (let k = 0; k < config.exclude.Length; k++) {
                            let s = config.exclude.get_Item(k);
                            if (file.Name.toLowerCase().includes(s.name.toLowerCase())) {
                                exclude = true;
                            }
                        }
                        if (exclude == false) {
                            let scene = AssetImporter.GetAtPath(Path.Combine("Assets/Games", game.Name, file.Name).replace("\\", "/"));
                            scene.assetBundleName = game.Name.toLowerCase();
                            //Debug.LogError(file.Name.replace(".unity", "").toLowerCase())
                            scenes.push(file.Name.replace(".unity", "").toLowerCase());
                        }
                    }
                }
                tempPack.levels = scenes;
                Packs.push(tempPack);
            }
        }
        else {
            Debug.LogError("Please Init Packs First!!!");
            return;
        }
    }
    let str = JSON.stringify(Packs);
    Debug.LogWarning(str);
    let writer = new StreamWriter(Path.Combine(Application.dataPath, "StreamingAssets", "GamePacks.json").replace("\\", "/"));
    writer.Write(str);
    writer.Close();
    Debug.LogWarning("Configure Done!!!");
}
exports.ConfigurePacks = ConfigurePacks;
//# sourceMappingURL=PacksManager.js.map