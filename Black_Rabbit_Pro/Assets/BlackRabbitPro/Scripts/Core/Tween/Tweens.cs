using System;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class Tweens : MonoBehaviour
{
    public static void FadeSprite(SpriteRenderer renderer, float start, float end, float time, Action callback)
    {
        renderer.color = new Color(renderer.color.r, renderer.color.g, renderer.color.b, start);
        renderer.DOFade(end, time).OnComplete(() =>
        {
            callback();
        });
    }

    public static void MoveFrom(Transform trans, Vector3 from, float time, Action callback)
    {
        Vector3 to = trans.position;
        trans.position = from;
        trans.DOMove(to, time).OnComplete(() =>
        {
            callback();
        });
    }

    public static void MoveTo(Transform trans, Vector3 to, float time, Action callback)
    {
        trans.DOMove(to, time).OnComplete(() =>
        {
            callback();
        });
    }
}
