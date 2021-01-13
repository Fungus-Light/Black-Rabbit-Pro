using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;

public class JsGlobal : MonoBehaviour
{
    JsEnv env = null;
    public TextAsset[] scripts;
    // Start is called before the first frame update
    void Start()
    {
        env = RunEnv.GlobalJsEnv;
        DontDestroyOnLoad(gameObject);
        for (int i = 0; i < scripts.Length; i++)
        {
            try
            {
                env.Eval(scripts[i].text, scripts[i].name);
            }
            catch (System.Exception e)
            {
                Debug.LogError("JSGlobal Error When Load>> " + scripts[i].name);
            }
        }
    }

    // Update is called once per frame
    void Update()
    {

    }
}
