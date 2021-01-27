using System;
using System.Collections.Generic;
using UnityEngine;

public interface IActionTrigger
{
    KeyCode code { get; set; }
    Action interAction { get; set; }
    string PlayerTag { get; set; }
    bool interActable { get; set; }

    Dictionary<string,Action> EnterAct { get; set; }
    Dictionary<string,Action> LeaveAct { get; set; }

    bool isUseful
    {
        get; set;
    }
    GameType GameType
    {
        get; set;
    }
    void MakeUseful();
    void MakeUseless();

    void MakeInterActable();
    void MakeDisInterActable();
}
