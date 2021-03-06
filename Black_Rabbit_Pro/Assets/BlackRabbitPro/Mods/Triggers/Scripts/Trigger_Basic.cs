﻿using System;
using System.Collections.Generic;
using UnityEngine;
using Black_Rabbit;

[RequireComponent(typeof(Collider))]
public class Trigger_Basic : MonoBehaviour, ITrigger
{
    public Dictionary<string, Action> EnterAct { get; set; } = new Dictionary<string, Action>();
    public Dictionary<string, Action> LeaveAct { get; set; } = new Dictionary<string, Action>();
    public GameType GameType { get; set; }
    public bool isUseful { get; set; }

    public void MakeUseful()
    {
        isUseful = true;
    }
    public void MakeUseless()
    {
        isUseful = false;
    }

    void Awake()
    {
        this.GetComponent<Collider>().isTrigger = true;
    }

    void OnTriggerEnter(Collider other)
    {
        if (isUseful)
        {
            foreach (string key in EnterAct.Keys)
            {
                if (key == other.tag)
                {
                    EnterAct[key]();
                }
            }
        }

    }

    void OnTriggerExit(Collider other)
    {
        if (isUseful)
        {
            foreach (string key in LeaveAct.Keys)
            {
                if (key == other.tag)
                {
                    LeaveAct[key]();
                }
            }
        }
    }

    void Update()
    {

    }
}
