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

    public Dictionary<string, string> Scenes;

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        Scenes = new Dictionary<string, string>();
    }

}
