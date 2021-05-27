using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using NaughtyAttributes;
using System.IO;

[CreateAssetMenu(menuName = "BlackRabbit/GameConfig", order = 1)]
public class GameConfig : ScriptableObject
{

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

    [HorizontalLine(color: EColor.Blue)]
    public bool isDebugMode = false;
    public int Port = 4396;
    public int waitSecond = 1;

    public List<FilePack> debugPacks;


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

        config.isDebugMode = isDebugMode;
        config.Port = Port;
        config.waitSecond = waitSecond;

        List<string> temp = new List<string>();
        for (int i = 0; i < debugPacks.Count; i++)
        {
            for (int k = 0; k < debugPacks[i].Mods.Count; k++)
            {
                temp.Add(debugPacks[i].PackName + "/" + debugPacks[i].Mods[k]);
            }
        }
        config.debugFiles = temp.ToArray();

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
