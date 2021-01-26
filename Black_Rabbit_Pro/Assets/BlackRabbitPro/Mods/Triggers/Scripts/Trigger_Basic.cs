using System;
using System.Collections.Generic;
using UnityEngine;
using Black_Rabbit;

[RequireComponent(typeof(Collider))]
[RequireComponent(typeof(AudioSource))]
public class Trigger_Basic : MonoBehaviour, ITrigger
{
    public Action EnterAct{get;set;}
    public Action LeaveAct{get;set;}
    public GameType GameType { get; set; }
    public bool isShow { get; set; }
    public string Name { get; set; }
    public string Message { get; set; }

    public Transform MessagePos { get; set; }
    public SimpleOutline outlineOBJ
    {
        get; set;
    }
    public void MakeUseful()
    {
        isShow = true;
    }
    public void MakeUseless()
    {
        isShow = false;
    }
    // Start is called before the first frame update
    void Start()
    {
        isShow=false;
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
