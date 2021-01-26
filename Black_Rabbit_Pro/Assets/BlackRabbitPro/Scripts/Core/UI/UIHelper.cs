using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UIHelper
{
    public static Canvas GetCanvas(string name)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            return trans.GetComponent<Canvas>();
        }
        else
        {
            return null;
        }
    }

    public static Button GetButton(string name)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            return trans.GetComponent<Button>();
        }
        else
        {
            return null;
        }
    }

    public static Text GetText(string name){
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            return trans.GetComponent<Text>();
        }
        else
        {
            return null;
        }
    }

    

}
