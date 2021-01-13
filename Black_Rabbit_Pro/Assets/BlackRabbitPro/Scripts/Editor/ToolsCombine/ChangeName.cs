using UnityEngine;
using System.Collections.Generic;
using UnityEditor;
using System.Text;
using UnityEngine.UIElements;

public class ChangeNameFunc
{
    [MenuItem(@"Tools/快速重命名/_FGO")]
    public static void AddFGO()
    {
        Transform[] transforms = Selection.transforms;

        foreach (var item in transforms)
        {
            item.name = item.name + "_FGO";
        }
        UnityEditor.Experimental.SceneManagement.PrefabStage prefabStage = UnityEditor.Experimental.SceneManagement.PrefabStageUtility.GetCurrentPrefabStage();
        if (prefabStage != null)
        {
            EditorUtility.SetDirty(prefabStage.prefabContentsRoot);

        }
    }

    [MenuItem(@"Tools/快速重命名/Clear")]
    public static void Clear()
    {
        Transform[] transforms = Selection.transforms;

        foreach (var item in transforms)
        {
            string[] x = item.name.Split('_');
            if (x.Length > 1)
            {
                string tmp = "";
                for (int i = 0; i < x.Length - 1; i++)
                {
                    tmp += x[i];
                    if (i < x.Length - 2)
                    {
                        tmp += "_";
                    }
                }
                item.name = tmp;
            }
        }
        UnityEditor.Experimental.SceneManagement.PrefabStage prefabStage = UnityEditor.Experimental.SceneManagement.PrefabStageUtility.GetCurrentPrefabStage();
        if (prefabStage != null)
        {
            EditorUtility.SetDirty(prefabStage.prefabContentsRoot);

        }
    }
}