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
    let packDir = new DirectoryInfo(Path.Combine(Application.dataPath, "Games").replace("\\", "/"));
    let Games = packDir.GetDirectories();
    for (let i = 0; i < Games.Length; i++) {
        let game = Games.get_Item(i);
        let configFile = Path.Combine("Assets", "Games", game.Name, "config.asset");
        if (File.Exists(configFile)) {
            let config = AssetDatabase.LoadAssetAtPath(configFile, T(csharp_1.PackConfig));
            if (config.entrance == null) {
                Debug.LogError(configFile + " must asign entrance!!!");
            }
            else {
                let Files = game.GetFiles();
                for (let j = 0; j < Files.Length; j++) {
                    let file = Files.get_Item(j);
                    if (file.Extension === ".unity") {
                        let scene = AssetImporter.GetAtPath(Path.Combine("Assets/Games", game.Name, file.Name).replace("\\", "/"));
                        scene.assetBundleName = game.Name.toLowerCase();
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
        }
        else {
            Debug.LogError("Please Init Packs First!!!");
        }
    }
}
exports.ConfigurePacks = ConfigurePacks;
//# sourceMappingURL=PacksManager.js.map