import { BRPSceneManager, IScenesLoader } from 'csharp'

function $SceneLoader(): IScenesLoader
function $SceneLoader(name: string): IScenesLoader
function $SceneLoader(name?: string): IScenesLoader {
    if (name == undefined) {
        name = "SceneLoader"
    }
    return BRPSceneManager.GetSceneLoader(name);
}

export {
    $SceneLoader
}