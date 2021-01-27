using System;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Collider))]
public class Trigger_Action : MonoBehaviour, IActionTrigger
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

    void OnTriggerEnter(Collider other)
    {
        if (isUseful)
        {
            if (other.tag == PlayerTag && this.GameType == GameType.TPS)
            {
                Debug.LogError("Player Enter");
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

    void OnTriggerExit(Collider other)
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
