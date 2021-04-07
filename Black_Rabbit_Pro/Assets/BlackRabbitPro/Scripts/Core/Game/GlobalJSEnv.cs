using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;

public class GlobalJSEnv
{
    private static JsEnv _Env;
    public static JsEnv Env
    {
        get
        {
            if (_Env == null)
            {
                if(ENVDebugConfig.instance.isDebugMode){
                    _Env = new JsEnv(new LevelScriptLoader(""), ENVDebugConfig.instance.Port);
                }else{
                    _Env = new JsEnv(new LevelScriptLoader(""));
                }
                
            }
            return _Env;
        }
    }

}
