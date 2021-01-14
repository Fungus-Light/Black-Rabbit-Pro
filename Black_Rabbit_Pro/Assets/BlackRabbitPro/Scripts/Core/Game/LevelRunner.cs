using System;
using UnityEngine;
using Puerts;

public class LevelRunner : MonoBehaviour
{
    delegate void LoaderInit(LevelRunner levelRunner);

    public string PackName = "";
    public string LevelModName = "";
    public string LevelLoaderName = "LevelLoader";
    private JsEnv env;

    public Action JsStart;
    public Action JsUpdate;
    public Action JsOnDestroy;
    void Awake()
    {
        if (env == null)
        {
            env = new JsEnv(new LevelScriptLoader(""));
        }

        string ModName = LevelModName;
        if (PackName != "")
        {
            ModName = PackName + "/" + LevelModName;
        }

        env.Eval(
            @"let level=require('" + ModName + "').Create(); " +
            "let loader=require('JS/" + LevelLoaderName + "');" +
            "loader.SetLevel('" + LevelModName + "',level)"
            );

        var Init = env.Eval<LoaderInit>("loader.Init");
        if (Init != null)
        {
            Init(this);
        }
    }

    void Start()
    {
        if (JsStart != null) JsStart();
    }

    // Update is called once per frame
    void Update()
    {
        if (JsUpdate != null) JsUpdate();
    }

    void OnDestroy()
    {
        if (JsOnDestroy != null) JsOnDestroy();
        JsStart = null;
        JsUpdate = null;
        JsOnDestroy = null;
    }
}
