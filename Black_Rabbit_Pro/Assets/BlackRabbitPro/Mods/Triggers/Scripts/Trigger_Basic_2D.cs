using System;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

[RequireComponent(typeof(Collider2D))]
public class Trigger_Basic_2D : MonoBehaviour, ITrigger
{
    public Dictionary<string, Action> EnterAct { get; set; } = new Dictionary<string, Action>();
    public Dictionary<string, Action> LeaveAct { get; set; } = new Dictionary<string, Action>();
    public GameType GameType { get; set; }
    public bool isUseful { get; set; }

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

    void Awake()
    {
        this.GetComponent<Collider2D>().isTrigger = true;
        Message = this.transform.GetChild(0).GetComponent<TextMesh>();
        Tweens.Fade(Message.transform, 0, 0, 0, null);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (isUseful)
        {
            if (EnterAct.ContainsKey(collision.tag))
            {
                Tweens.Fade(Message.transform, 0, 1, FadeTime, null);
            }


            foreach (string key in EnterAct.Keys)
            {
                if (key == collision.tag)
                {
                    EnterAct[key]();
                }
            }
        }
    }

    private void OnTriggerExit2D(Collider2D collision)
    {
        if (isUseful)
        {

            if (EnterAct.ContainsKey(collision.tag))
            {
                Tweens.Fade(Message.transform, 1, 0, FadeTime, null);
            }

            foreach (string key in LeaveAct.Keys)
            {
                if (key == collision.tag)
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
