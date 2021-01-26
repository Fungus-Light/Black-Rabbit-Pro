using System;
using System.Collections.Generic;
using UnityEngine;
using Black_Rabbit;

public enum GameType
{
    FPS,
    TPS,
    AVG
}

public interface ITrigger
{
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
}
