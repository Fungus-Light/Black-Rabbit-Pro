using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Black_Rabbit;

public enum GameType{
    FPS,
    TPS,
    AVG
}

public interface ITrigger
{
    string Name{
        get;set;
    }

    string Message{
        get;set;
    }
    bool isShow{
        get;set;
    }
    GameType gameType{
        get;set;
    }

    SimpleOutline outlineOBJ{
        get;set;
    }

    Transform MessagePos{get;set;}
    void MakeUseful();
    void MakeUseless();
}
