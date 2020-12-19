using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameObjectHelper
{
    public static Transform GetTransformByName(string name)
    {
        string realname = "$_" + name;

        GameObject obj = GameObject.Find(realname);

        if (obj != null)
        {
            return obj.transform;
        }
        else
        {
            return null;
        }

    }


}
