using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

public class NameHelper
{
    [MenuItem("Tools/Common/Inject to game %&n")]
    public static void QuickRename()
    {
        foreach (Transform t in Selection.transforms)
        {
            if (t.name.StartsWith("$_") == false)
            {
                t.name = "$_" + t.name;
            }
        }
    }
}
