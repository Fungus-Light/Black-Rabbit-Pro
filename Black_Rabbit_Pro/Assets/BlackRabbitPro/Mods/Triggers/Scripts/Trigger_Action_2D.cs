using System;
using System.Collections.Generic;
using UnityEngine;

public class Trigger_Action_2D : MonoBehaviour,IActionTrigger
{
    public string PlayerTag { get; set; }
    public KeyCode code { get; set; }
    public Action interAction { get; set; }
    public Dictionary<string, Action> EnterAct { get; set; } = new Dictionary<string, Action>();
    public Dictionary<string, Action> LeaveAct { get; set; } = new Dictionary<string, Action>();
    public GameType GameType { get; set; }
    public bool isUseful { get; set; }
    public bool interActable { get; set; }

    public void MakeUseful()
    {
        isUseful = true;
    }
    public void MakeUseless()
    {
        isUseful = false;
    }

    public void MakeInterActable()
    {
        interActable = true;
    }

    public void MakeDisInterActable()
    {
        interActable = false;
    }

    void Awake()
    {
        this.GetComponent<Collider>().isTrigger = true;
    }

    void Update()
    {
        if (interActable)
        {
            if (Input.GetKeyUp(code))
            {
                interActable = false;
                interAction();
            }
        }
    }

    void OnTriggerEnter2D(Collider other)
    {
        if (isUseful)
        {
            if (other.tag == PlayerTag && this.GameType == GameType.TPS)
            {
                MakeInterActable();
            }

            if (this.GameType == GameType.TPS)
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
        else
        {
            interActable = false;
        }

    }

    void OnTriggerExit2D(Collider other)
    {
        if (isUseful)
        {
            if (other.tag == PlayerTag && this.GameType == GameType.TPS)
            {
                MakeDisInterActable();
            }

            if (this.GameType == GameType.TPS)
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
        else
        {
            interActable = false;
        }
    }
}
