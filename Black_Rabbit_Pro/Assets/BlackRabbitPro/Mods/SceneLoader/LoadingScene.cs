using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
#if UNITY_EDITOR
using UnityEditor.SceneManagement;
#endif

public class LoadingScene : MonoBehaviour
{
    private string NextScene;
    public Slider progress;
    void Awake()
    {
        NextScene = PlayerPrefs.GetString("nextScene");
        StartCoroutine(LoadNext(NextScene));
    }

    IEnumerator LoadNext(string name)
    {
#if UNITY_EDITOR
        if (AssetHelper.Instance.loadType == AssetHelper.LoadType.Assets)
        {
            EditorSceneManager.OpenScene(name);
            yield return null;
        }
        else
        {
            AsyncOperation loadOperation = UnityEngine.SceneManagement.SceneManager.LoadSceneAsync(name);

            while (!loadOperation.isDone)
            {

                progress.value = loadOperation.progress;

                yield return null;
            }
        }

#else
        AsyncOperation loadOperation = UnityEngine.SceneManagement.SceneManager.LoadSceneAsync(name);

        while (!loadOperation.isDone)
        {

            progress.value = loadOperation.progress;

            yield return null;
        }
#endif

    }
}
