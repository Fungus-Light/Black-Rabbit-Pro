using System.IO;
using System;
using UnityEngine;

public class LevelScriptLoader : Puerts.ILoader
{
    public string debugRoot { get; private set; }

    public LevelScriptLoader(string debugRoot)
    {
        this.debugRoot = debugRoot;
    }

    public bool FileExists(string filepath)
    {
        if (filepath.StartsWith("puerts/")) return true;
#if UNITY_EDITOR
        return File.Exists(Path.Combine(Application.streamingAssetsPath, filepath + ".txt").Replace("\\", "/"));
#else
	    return File.Exists(Path.Combine(Application.dataPath,"StreamingAssets", filepath + ".txt").Replace("\\", "/"));
#endif
    }
    public string GetScriptDebugPath(string filepath)
    {
        if (filepath.StartsWith("puerts/"))
        {
            return Path.Combine(Application.dataPath, "BlackRabbitPro/Libs/Puerts/Src/Resources", filepath).Replace("\\", "/") + ".txt";
        }
        return System.IO.Path.Combine(debugRoot, filepath+ ".txt").Replace("\\", "/");
    }

    public string ReadFile(string filepath, out string debugpath)
    {
        debugpath = GetScriptDebugPath(filepath);
        if (filepath.StartsWith("puerts/"))
        {
            var asset = Resources.Load<TextAsset>(filepath);
            return asset.text;
        }
        //Debug.Log(Path.Combine(Application.dataPath,"StreamingAssets", filepath + ".txt").Replace("\\", "/"));
        return File.ReadAllText(Path.Combine(Application.dataPath,"StreamingAssets", filepath + ".txt").Replace("\\", "/"));

    }

    public void Close() { }
}


