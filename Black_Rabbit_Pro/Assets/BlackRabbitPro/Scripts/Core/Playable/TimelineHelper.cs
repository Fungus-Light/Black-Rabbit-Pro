using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Playables;

public class TimelineHelper : MonoBehaviour
{
    public static PlayableDirector GetTimeline(string name)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            return trans.GetComponent<PlayableDirector>();
        }
        else
        {
            return null;
        }
    }
}
