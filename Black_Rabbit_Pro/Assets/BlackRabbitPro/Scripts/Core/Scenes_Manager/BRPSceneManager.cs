using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BRPSceneManager
{
    public static IScenesLoader GetSceneLoader(string name)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            return trans.GetComponent<IScenesLoader>();
        }
        else
        {
            return null;
        }
    }
}
