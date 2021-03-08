using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEditor;
using UnityEditor.Build.Reporting;

public class BuildTools
{
    [MenuItem("Build/Init Packs")]
    public static void InitPacks()
    {
        DirectoryInfo packDir = new DirectoryInfo(Path.Combine(Application.dataPath, "Games").Replace("\\", "/"));
        foreach (DirectoryInfo game in packDir.GetDirectories())
        {
            string configFile = Path.Combine("Assets", "Games", game.Name, "config.asset");
            //Debug.Log(configFile);
            if (File.Exists(configFile))
            {
                Debug.Log(configFile + " already exists a config file.");
            }
            else
            {
                AssetDatabase.CreateAsset(ScriptableObject.CreateInstance<PackConfig>(), configFile);
            }
        }
    }

    [MenuItem("Build/Auto Configure Packs")]
    public static void ConfigurePacks()
    {
        DirectoryInfo packDir = new DirectoryInfo(Path.Combine(Application.dataPath, "Games"));
        foreach (DirectoryInfo game in packDir.GetDirectories())
        {
            foreach (FileInfo file in game.GetFiles())
            {
                if (file.Extension == ".unity")
                {
                    AssetImporter scene = AssetImporter.GetAtPath(Path.Combine("Assets/Games", game.Name, file.Name).Replace("\\", "/"));
                    scene.assetBundleName = game.Name.ToLower();
                }
            }
        }
    }

    [MenuItem("Build/Build All Packs")]
    public static void BuildAllPacks()
    {

        ConfigurePacks();
        List<AssetBundleBuild> builds = new List<AssetBundleBuild>();

        DirectoryInfo packDir = new DirectoryInfo(Path.Combine(Application.dataPath, "Games"));
        foreach (DirectoryInfo game in packDir.GetDirectories())
        {
            AssetBundleBuild build = new AssetBundleBuild();
            build.assetBundleName = game.Name.ToLower();
            List<string> Assets = new List<string>();
            foreach (FileInfo file in game.GetFiles())
            {
                if (file.Extension == ".unity")
                {
                    Assets.Add(Path.Combine("Assets/Games", game.Name, file.Name).Replace("\\", "/"));
                }
            }
            build.assetNames = Assets.ToArray();
            builds.Add(build);
        }
        string output = Path.Combine(Application.dataPath, "StreamingAssets", "GamePacks").Replace("\\", "/");
        if (Directory.Exists(output) == false)
        {
            Directory.CreateDirectory(output);
        }
        BuildPipeline.BuildAssetBundles(output, builds.ToArray(), BuildAssetBundleOptions.None, EditorUserBuildSettings.activeBuildTarget);
        AssetDatabase.Refresh();
    }
}
