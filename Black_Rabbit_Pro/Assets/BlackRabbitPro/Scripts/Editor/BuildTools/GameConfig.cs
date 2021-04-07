using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using NaughtyAttributes;
using System.IO;

[System.Serializable]
public struct Resolution
{
    public int w;
    public int h;

    public Resolution(int _w, int _h)
    {
        w = _w;
        h = _h;
    }
}

[CreateAssetMenu(menuName = "BlackRabbit/GameConfig", order = 1)]
public class GameConfig : ScriptableObject
{
    [System.Serializable]
    public class ConfigStruct
    {
        public int v = 1;
        public string version = "0.0.1";
        public Resolution resolution = new Resolution(1280, 720);
        public bool fullscreen = false;
        public string entranceBundle = "example";
        public string mode = "debug";

        public int rate = 60;
    }
    public enum RunMode
    {
        debug,
        release
    }

    public int v = 1;
    public string version = "0.0.1";
    public Resolution resolution = new Resolution(1280, 720);
    public bool fullscreen = false;
    public string entranceBundle = "example";
    public RunMode mode = RunMode.debug;

    public int rate = 60;


    [Button("Gen Game Config")]
    public void GenGameConfig()
    {
        ConfigStruct config = new ConfigStruct();

        config.v = v;
        config.version = "v-" + version;
        config.resolution = resolution;
        config.fullscreen = fullscreen;
        config.entranceBundle = entranceBundle;
        config.mode = mode.ToString();
        config.rate = rate;

        string jsonStr = JsonUtility.ToJson(config);
        StreamWriter writer = new StreamWriter(Path.Combine(Application.dataPath, "StreamingAssets", "GameConfig.json").Replace("\\", "/"));
        writer.Write(jsonStr);
        writer.Close();
        Debug.LogWarning("New Game Config Gened");
    }

    [Button("Reset Game Config")]
    public void ResetGameConfig()
    {

    }
}
