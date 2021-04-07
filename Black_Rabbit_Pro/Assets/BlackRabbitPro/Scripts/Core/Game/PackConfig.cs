using UnityEngine;

#if UNITY_EDITOR
using UnityEditor;
#endif

public class PackConfig : ScriptableObject
{
#if UNITY_EDITOR
    public SceneAsset entrance;
    public SceneAsset[] exclude;
#endif
}
