using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScenesLoader : MonoBehaviour, IScenesLoader
{
    public void LoadScene(string name)
    {
        PlayerPrefs.SetString("nextScene", name);
        UnityEngine.SceneManagement.SceneManager.LoadScene("LoadingScene");
    }
}
