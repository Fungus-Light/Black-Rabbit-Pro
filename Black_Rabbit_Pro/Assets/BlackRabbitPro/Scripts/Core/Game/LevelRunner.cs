using System;
using UnityEngine;
using Puerts;

[RequireComponent(typeof(GameObjectPool))]
public class LevelRunner : MonoBehaviour
{
    delegate void LoaderInit(LevelRunner levelRunner);

    public string PackName = "";
    public string LevelModName = "";
    public string CorePackName = "JS";
    public string LevelLoaderName = "LevelLoader";
    private JsEnv env;

    //public Action JsAwake;
    public Action JsStart;
    public Action JsUpdate;

    public Action JsFixedUpdate;
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
            "let loader=require('" + CorePackName + "/" + LevelLoaderName + "');" +
            "loader.SetLevel('" + LevelModName + "',level)"
            );

        var Init = env.Eval<LoaderInit>("loader.Init");
        if (Init != null)
        {
            Init(this);
        }

        //if (JsAwake != null) JsAwake();

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

    void FixedUpdate()
    {
        if (JsFixedUpdate != null) JsFixedUpdate();
    }

    void OnDestroy()
    {
        if (JsOnDestroy != null) JsOnDestroy();
        //JsAwake = null;
        JsFixedUpdate = null;
        JsStart = null;
        JsUpdate = null;
        JsOnDestroy = null;
    }
}
