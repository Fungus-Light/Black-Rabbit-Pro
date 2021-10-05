using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AssetHelper : MonoBehaviour
{
    public enum LoadType
    {
        Assets,
        Bundles
    }

    public LoadType loadType;

    public static AssetHelper Instance;
    public static AssetHelper GetAssetHelper()
    {
        return Instance;
    }

    public AssetBundle SceneBundle;
    public AssetBundle UIBundle;

    public Dictionary<string, string> Scenes;

    public string[] GetAllScenes(){
        List<string> allScenes =new List<string>();
        foreach(string key in Scenes.Keys){
            allScenes.Add(Scenes[key]);
        }
        return allScenes.ToArray();
    }

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        Scenes = new Dictionary<string, string>();
    }

}
