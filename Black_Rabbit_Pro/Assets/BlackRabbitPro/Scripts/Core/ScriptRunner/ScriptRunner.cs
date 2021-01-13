using UnityEngine;
using Puerts;
using System;

public class ScriptRunner : MonoBehaviour
{
    public TextAsset Script;

    internal static JsEnv jsEnv = null;

    public Action JsStart;
    public Action JsUpdate;
    public Action JsOnDestroy;

    private void Awake()
    {
        jsEnv = RunEnv.GlobalJsEnv;
        
        if (Script != null)
        {
            jsEnv.Eval(Script.text, Script.name);
        }

    }

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }
}
