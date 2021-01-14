using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using Puerts;

public class GameEntrance : MonoBehaviour
{
    private JsEnv env;

    [Header("Entrance File")]
    public string ModName;

    private void Awake()
    {
        env = RunEnv.GlobalJsEnv;
        if (env == null)
        {
            Debug.LogError("Env init fail!!!!");
        }

    }
    // Start is called before the first frame update
    void Start()
    {
        env.Eval("require(\"main\")");
    }

}
