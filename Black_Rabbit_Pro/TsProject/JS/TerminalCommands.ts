import { AssetHelper, UnityEngine } from "csharp"
import { $SceneLoader } from "SceneLoader/SceneLoader"
import { $, T } from "Utils/Common"

const Commands = {
    TestWork: () => {
        console.log("This Mod Is Working!!!!")
    },
    Message: UnityEngine.Debug.Log,
    LoadScene: (scene: string) => {
        $SceneLoader().LoadScene(scene)
    },
    ListScenes: () => {
        console.log("------------------------")
        let scenes = AssetHelper.Instance.GetAllScenes();
        for (let i = 0; i < scenes.Length; i++) {
            console.log(scenes.get_Item(i));
        }
        console.log("------------------------")
    }

}

function Help() {
    console.log(`
    $(name:string) //Get The Transform Of An Object
    T(obj:Object)  //Get The Type Of An Object
    API.TestWork() //Test If Js Env Run Normal.
    API.Message(msg:string) //Print A Message.
    API.ListScenes()  //List All Scenes
    API.LoadScene(scene:string) //Load A Scene.
    `)
}

export {
    Commands,
    Help,
    $,
    T
}