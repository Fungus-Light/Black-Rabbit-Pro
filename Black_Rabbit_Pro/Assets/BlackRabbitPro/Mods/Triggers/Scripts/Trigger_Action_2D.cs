using System;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Collider2D))]
public class Trigger_Action_2D : MonoBehaviour, IActionTrigger
{
    public string PlayerTag { get; set; }
    public KeyCode code { get; set; }
    public Action interAction { get; set; }
    public Dictionary<string, Action> EnterAct { get; set; } = new Dictionary<string, Action>();
    public Dictionary<string, Action> LeaveAct { get; set; } = new Dictionary<string, Action>();
    public GameType GameType { get; set; }
    public bool isUseful { get; set; }
    public bool interActable { get; set; }

    public TextMesh Message;
    public float FadeTime = 0.5f;

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
        this.GetComponent<Collider2D>().isTrigger = true;
        Message = this.transform.GetChild(0).GetComponent<TextMesh>();
        Tweens.Fade(Message.transform, 0, 0, 0, null);
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

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (isUseful)
        {
            if (PlayerTag == other.tag)
            {
                Tweens.Fade(Message.transform, 0, 1, FadeTime, null);
                MakeInterActable();
            }


            foreach (string key in EnterAct.Keys)
            {
                if (key == other.tag)
                {
                    EnterAct[key]();
                }
            }


        }
        else
        {
            interActable = false;
        }
    }

    private void OnTriggerExit2D(Collider2D other)
    {
        if (isUseful)
        {
            if (PlayerTag == other.tag)
            {
                Tweens.Fade(Message.transform, 1, 0, FadeTime, null);
                MakeDisInterActable();
            }


            foreach (string key in LeaveAct.Keys)
            {
                if (key == other.tag)
                {
                    LeaveAct[key]();
                }
            }

        }
        else
        {
            interActable = false;
        }
    }
}
