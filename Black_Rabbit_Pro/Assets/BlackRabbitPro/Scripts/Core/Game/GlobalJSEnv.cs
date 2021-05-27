using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;
using System.IO;

public class GlobalJSEnv
{
    public static bool isDebuggerConnected = false;
    private static JsEnv _Env;
    public static JsEnv Env
    {
        get
        {
            if (_Env == null)
            {
                string configStr = FileHelper.ReadStreamTextFile("GameConfig.json");
                ConfigStruct config = JsonUtility.FromJson<ConfigStruct>(configStr);

                if (config != null)
                {
                    if (config.isDebugMode)
                    {
                        _Env = new JsEnv(new LevelScriptLoader(""), config.Port);

                        for (int i = 0; i < config.debugFiles.Length; i++)
                        {
                            GlobalJSEnv.Env.Eval("{" +
                            $"require('{config.debugFiles[i]}');"
                            + "}");
                        }
                    }
                    else
                    {
                        _Env = new JsEnv(new LevelScriptLoader(""));
                    }
                }
                else
                {
                    Debug.LogError("Can Not Read GameConfig.json");
                }

            }
            return _Env;
        }
    }

}
