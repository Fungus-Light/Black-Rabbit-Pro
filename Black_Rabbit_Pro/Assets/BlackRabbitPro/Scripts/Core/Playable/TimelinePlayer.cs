using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Playables;

public class TimelinePlayer : MonoBehaviour
{
    public static TimelinePlayer Instance;

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
    }
}
