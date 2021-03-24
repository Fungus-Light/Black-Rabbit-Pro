using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEditor.SceneManagement;

public class InitLevel
{
    [MenuItem("Tools/Common/Make It LevelRunner %&i")]
    public static void InitLevelRunner()
    {
        if (Selection.transforms.Length < 0)
        {
            Debug.LogError("Select An Object First!!!");
        }
        else
        {
            if (Selection.transforms.Length > 1)
            {
                Debug.LogError("Each Level Can Only Have One LevelRunner");
            }
            else
            {
                Selection.transforms[0].gameObject.AddComponent<LevelRunner>();
                EditorSceneManager.MarkSceneDirty(EditorSceneManager.GetActiveScene());
            }
        }

    }
}
