using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
#if UNITY_EDITOR
using UnityEditor;
#endif

public class UILoader
{
    public static GameObject LoadUI(string name){
        GameObject ui;
        GameObject uitemplate;
#if UNITY_EDITOR 
        Debug.Log(Path.Combine(Application.dataPath,"UIs",name+".prefab"));
        uitemplate = AssetDatabase.LoadAssetAtPath<GameObject>(Path.Combine("Assets","UIs",name+".prefab").Replace("\\","/"));
        Debug.Log(uitemplate == null);
        if(uitemplate!=null){
            if(GameObjectHelper.GetTransformByName("UIRoot")!=null){
                ui = GameObject.Instantiate<GameObject>(uitemplate,parent:GameObjectHelper.GetTransformByName("UIRoot"));
                Debug.Log(ui == null);
                return ui;
            }else{
                Debug.LogError("Must Have An UIRoot");
                return null;
            }
            
        }else{
            return null;
        }
        
        
#else
        if(AssetHelper.Instance.UIBundle == null){
            AssetBundle uis;
#if UNITY_ANDROID
            uis = AssetBundle.LoadFromFile(Path.Combine(Application.persistentDataPath, "GamePacks", "UIs"));
#else
            uis = AssetBundle.LoadFromFile(Path.Combine(Application.streamingAssetsPath, "GamePacks", "UIs"));
#endif
        AssetHelper.Instance.UIBundle = uis;
        }

        if(GameObjectHelper.GetTransformByName("UIRoot")!=null){
            uitemplate = AssetHelper.Instance.UIBundle.LoadAsset<GameObject>(name);
            ui = GameObject.Instantiate<GameObject>(uitemplate,parent:GameObjectHelper.GetTransformByName("UIRoot"));
            return ui;
        }else{
            Debug.LogError("Must Have An UIRoot");
            return null;
        }
        
#endif

    }
}
