using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Fungus;

public class DialogHelper : MonoBehaviour
{
    public static Character GetCharacter(string name)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            return trans.GetComponent<Character>();
        }
        else
        {
            return null;
        }
    }

    public static Stage GetStage(string name)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            return trans.GetComponent<Stage>();
        }
        else
        {
            return null;
        }
    }

    public static Stage GetStage()
    {
        return Stage.GetActiveStage();
    }

}
