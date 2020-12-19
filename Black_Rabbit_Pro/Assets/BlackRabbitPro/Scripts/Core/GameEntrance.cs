using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using Puerts;

public class GameEntrance : MonoBehaviour
{
    private JsEnv env;

    [Header("Js Core File")]
    public TextAsset JsCore;

    [Header("Entrance File")]
    public TextAsset EntranceScript;

    private void Awake()
    {
        env = new JsEnv();
        if (env == null)
        {
            Debug.LogError("Env init fail!!!!");
        }
        else
        {
            env.Eval(JsCore.text);
        }

    }
    // Start is called before the first frame update
    void Start()
    {
        env.Eval(EntranceScript.text);
    }

    private void OnDestroy()
    {
        env.Dispose();
    }
}
