using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

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
        AsyncOperation loadOperation = UnityEngine.SceneManagement.SceneManager.LoadSceneAsync(name);

        while (!loadOperation.isDone)
        {

            progress.value = loadOperation.progress;

            yield return null;
        }
    }
}
