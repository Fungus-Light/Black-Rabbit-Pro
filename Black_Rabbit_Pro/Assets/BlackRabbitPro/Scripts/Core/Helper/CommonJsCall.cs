using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

#if UNITY_EDITOR
using UnityEditor;
#endif
public class CommonJsCall : MonoBehaviour
{
    public static CommonJsCall Instance;

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }

    }

    public static void QuitGame()
    {
#if UNITY_EDITOR
        UnityEditor.EditorApplication.isPlaying = false;
        UnityEngine.Debug.Log("Quit From Game");
#else
        Application.Quit();
#endif
    }


    static IEnumerator _WaitForFrames(int count, Action CallBack)
    {

        while (count > 0)
        {
            yield return new WaitForEndOfFrame();
            count--;
        }

        CallBack();
    }
    public static void WaitForFrames(int count, Action CallBack)
    {
        Instance.StartCoroutine(_WaitForFrames(count, CallBack));
    }

    static IEnumerator _WaitForSecondsRealtime(float count, Action CallBack)
    {
        yield return new WaitForSecondsRealtime(count);
        CallBack();
    }
    public static void WaitForSecondsRealtime(float count, Action CallBack)
    {
        Instance.StartCoroutine(_WaitForSecondsRealtime(count, CallBack));
    }

    static IEnumerator _WaitForSeconds(float count, Action CallBack)
    {
        yield return new WaitForSeconds(count);
        CallBack();
    }

    public static void WaitForSeconds(float count, Action CallBack)
    {
        Instance.StartCoroutine(_WaitForSeconds(count, CallBack));
    }

    static IEnumerator _DoAction(Action action, Action callBack)
    {
        action();
        yield return 0;
        callBack();
        yield return 0;
    }
    public static void DoAction(Action action, Action callBack)
    {
        Instance.StartCoroutine(_DoAction(action, callBack));
    }

}
