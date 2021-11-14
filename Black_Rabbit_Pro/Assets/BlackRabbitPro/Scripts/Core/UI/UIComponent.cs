using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class UIComponent : MonoBehaviour
{
    public List<Transform> subObjects;
    public Dictionary<string, Transform> subObjectsPool;

    public Action update,destroy;
    private void Awake()
    {
        subObjectsPool = new Dictionary<string, Transform>();
        subObjects = new List<Transform>();
        foreach (Transform trans in this.GetComponentsInChildren<Transform>())
        {
            if (trans.name.StartsWith("#_"))
            {
                if (subObjectsPool.ContainsKey(trans.name))
                {
                    Debug.LogError("Already exist this obj " + trans.name);
                }
                else
                {
                    subObjects.Add(trans);
                    subObjectsPool.Add(trans.name,trans);
                }
            }
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (update!=null)
        {
            update();
        }
    }

    private void OnDestroy()
    {
        if (destroy != null)
        {
            destroy();
        }
    }
}
