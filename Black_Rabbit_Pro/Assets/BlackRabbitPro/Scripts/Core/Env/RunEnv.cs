using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;

public class RunEnv : MonoBehaviour
{
    private static JsEnv globalJsEnv;
    public static JsEnv GlobalJsEnv
    {
        get
        {
            if (globalJsEnv == null)
            {
                globalJsEnv = new JsEnv(new JavaScriptLoader(""));
            }
            return globalJsEnv;
        }
    }

    public static RunEnv Instance = null;

    private void Awake()
    {
        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

}
