using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ENVDebugConfig : MonoBehaviour
{
    public DebugFileConfig config;
    public bool isDebugMode = false;
    public int Port = 4396;
    public static ENVDebugConfig instance;
    // Start is called before the first frame update
    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }

        if (isDebugMode)
        {
            if (config != null)
            {
                for (int i = 0; i < config.Packs.Count; i++)
                {
                    for (int k = 1; k < config.Packs[i].Mods.Count; k++)
                    {
                        GlobalJSEnv.Env.Eval("{" +
                        $"require('{config.Packs[i].PackName}/{config.Packs[i].Mods[k]}');"
                        + "}");
                    }
                }
            }
            GlobalJSEnv.Env.WaitDebugger();
        }
    }
}
