using System.IO;
using System;
using UnityEngine;

public class JavaScriptLoader : Puerts.ILoader
{
    public string debugRoot { get; private set; }

    public JavaScriptLoader(string debugRoot)
    {
        this.debugRoot = debugRoot;
    }

    public bool FileExists(string filepath)
    {
        if (filepath.StartsWith("puerts/")) return true;
#if UNITY_EDITOR
        //Debug.Log(Path.Combine(Application.streamingAssetsPath + "/JS", filepath).Replace("\\", "/"));
        return File.Exists(Path.Combine(Application.streamingAssetsPath, "JS", filepath + ".txt").Replace("\\", "/"));
#else
			return true;
#endif
    }
    public string GetScriptDebugPath(string filepath)
    {
        if (filepath.StartsWith("puerts/"))
        {
            return Path.Combine(Application.dataPath, "BlackRabbitPro/Libs/Puerts/Src/Resources", filepath).Replace("\\", "/") + ".txt";
        }
        return System.IO.Path.Combine(debugRoot, filepath).Replace("\\", "/");
    }

    public string ReadFile(string filepath, out string debugpath)
    {
        debugpath = GetScriptDebugPath(filepath);
        if (filepath.StartsWith("puerts/"))
        {
            var asset = Resources.Load<TextAsset>(filepath);
            return asset.text;
        }
        //Debug.Log(Path.Combine(Application.streamingAssetsPath + "/JS", filepath).Replace("\\", "/"));
        return File.ReadAllText(Path.Combine(Application.streamingAssetsPath + "/JS", filepath + ".txt").Replace("\\", "/"));
    }

    public void Close() { }
}


