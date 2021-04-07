using System;
using UnityEngine;
using NaughtyAttributes;
using Puerts;

[RequireComponent(typeof(GameObjectPool))]
public class LevelRunner : MonoBehaviour
{
    delegate void LoaderInit(LevelRunner levelRunner);
    public bool AutoInitEnv = true;
    public string PackName = "Game";
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
        if(ENVDebugConfig.instance == null){
            GameObject go = Resources.Load("Core/DebugConfig") as GameObject;
            GameObject.Instantiate(go);
        }

        if (env == null)
        {
            env=GlobalJSEnv.Env;
        }

        //if (JsAwake != null) JsAwake();
        
    }

    void RunScript(){

        string ModName = LevelModName;
        if (PackName != "")
        {
            ModName = PackName + "/" + LevelModName;
        }

        env.Eval(
            "var loader = (function(){"+
            $@"
            let level=require('{ModName}').Create();
            let loader=require('{CorePackName}/{LevelLoaderName}');
            loader.SetLevel('{LevelModName}',level)
            return loader;
            "
            +"})();", ModName);

        var Init = env.Eval<LoaderInit>("loader.Init");
        if (Init != null)
        {
            Init(this);
        }

        if (AutoInitEnv)
        {
            env.Eval($"require('{CorePackName}/AutoInitEnv')", "AutoInitEnv");
        }

        if (JsStart != null) JsStart();
    }


    void Start()
    {
        
        RunScript();
        
    }

    // Update is called once per frame
    void Update()
    {
        env.Tick();
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
