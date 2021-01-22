using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameObjectHelper
{
    public static Transform GetTransformByName(string name)
    {
        string realname = "$_" + name;

        return GameObjectPool.Instance.Find(realname);

    }


}
