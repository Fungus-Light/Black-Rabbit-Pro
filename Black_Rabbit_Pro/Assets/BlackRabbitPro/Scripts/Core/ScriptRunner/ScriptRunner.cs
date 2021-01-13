using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;

public class ScriptRunner : MonoBehaviour
{
    [SerializeField]
    [Tooltip("脚本队列，依次加载")]
    private TextAsset[] Scripts;

    internal static JsEnv jsEnv = null;
    

    private void Awake()
    {
        jsEnv = RunEnv.GlobalJsEnv;
        

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
