using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class FilePack{
    public string PackName;
    public List<string> Mods;
}

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

    public bool isDebugMode = false;
    public int Port = 4396;
    public int waitSecond = 1;

    public string[] debugFiles;
}