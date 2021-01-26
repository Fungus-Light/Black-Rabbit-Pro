using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TriggerHelper
{
    public static ITrigger GetTrigger(string name)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            return trans.GetComponent<ITrigger>();
        }
        else
        {
            return null;
        }
    }
}
