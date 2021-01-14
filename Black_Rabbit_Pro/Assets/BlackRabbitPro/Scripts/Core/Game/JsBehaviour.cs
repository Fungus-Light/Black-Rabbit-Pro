using UnityEngine;
using Puerts;
using System;


public delegate void ModuleInit(JsBehaviour monoBehaviour);

//只是演示纯用js实现MonoBehaviour逻辑的可能，
//但从性能角度这并不是最佳实践，会导致过多的跨语言调用
public class JsBehaviour : MonoBehaviour
{
    public string ModuleName;//可配置加载的js模块

    public Action JsStart;
    public Action JsUpdate;
    public Action JsOnDestroy;

    static JsEnv jsEnv;

    void Awake()
    {
        if (jsEnv == null) jsEnv = new JsEnv(new JavaScriptLoader(""));

        var init = jsEnv.Eval<ModuleInit>("const " + ModuleName + " = require('" + ModuleName + "'); " + ModuleName + ".Init;");

        init?.Invoke(this);
    }

    void Start()
    {
        if (JsStart != null) JsStart();
    }

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
