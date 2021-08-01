using System.Collections;
using System;
using System.IO;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.Networking;
using ICSharpCode.SharpZipLib.Zip;

public class PreLoad : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
#if UNITY_ANDROID
        if (File.Exists(Path.Combine(Application.persistentDataPath, "GameConfig.json")) == false)
        {
            StartCoroutine(UnPackFile(Path.Combine(Application.streamingAssetsPath, "pack.zip"), () =>
            {
                SceneManager.LoadScene("Entrance");
            }));
        }
        else
        {
            SceneManager.LoadScene("Entrance");
        }
#else
        SceneManager.LoadScene("Entrance");
#endif
    }

    IEnumerator UnPackFile(string url, Action callBack)
    {
        UnityWebRequest req = UnityWebRequest.Get(url);
        yield return req.SendWebRequest();
        if (File.Exists(Path.Combine(Application.persistentDataPath, "pack.zip")))
        {
            File.Delete(Path.Combine(Application.persistentDataPath, "pack.zip"));
        }
        File.WriteAllBytes(Path.Combine(Application.persistentDataPath, "pack.zip"), req.downloadHandler.data);
        (new FastZip()).ExtractZip(Path.Combine(Application.persistentDataPath, "pack.zip"), Application.persistentDataPath, "");
        callBack();

    }

    // Update is called once per frame
    void Update()
    {

    }
}
