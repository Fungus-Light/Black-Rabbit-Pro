using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class FilePack{
    public string PackName;
    public List<string> Mods;
}
[CreateAssetMenu(menuName = "BlackRabbit/DebugModConfig", order = 1)]
public class DebugFileConfig : ScriptableObject
{
    public List<FilePack> Packs;
}
