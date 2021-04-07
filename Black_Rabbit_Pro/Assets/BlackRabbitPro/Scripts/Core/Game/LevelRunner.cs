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

    [HorizontalLine(color: EColor.Blue)]
    public bool isDebugMode = false;
    public int DebugPort = 4396;


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
            if (isDebugMode)
            {
                env = new JsEnv(new LevelScriptLoader(""), DebugPort);
            }
            else
            {
                env = new JsEnv(new LevelScriptLoader(""));
            }
        }

        if(isDebugMode){
            env.WaitDebugger();
        }

        string ModName = LevelModName;
        if (PackName != "")
        {
            ModName = PackName + "/" + LevelModName;
        }

        env.Eval(
            $@"
            let level=require('{ModName}').Create();
            let loader=require('{CorePackName}/{LevelLoaderName}');
            loader.SetLevel('{LevelModName}',level)
            ", ModName);

        var Init = env.Eval<LoaderInit>("loader.Init");
        if (Init != null)
        {
            Init(this);
        }

        //if (JsAwake != null) JsAwake();

    }


    void Start()
    {
        if (AutoInitEnv)
        {
            env.Eval($"require('{CorePackName}/AutoInitEnv')", "AutoInitEnv");
        }

        if (JsStart != null) JsStart();
    }

    // Update is called once per frame
    void Update()
    {
        if (JsUpdate != null) JsUpdate();
        env.Tick();
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
