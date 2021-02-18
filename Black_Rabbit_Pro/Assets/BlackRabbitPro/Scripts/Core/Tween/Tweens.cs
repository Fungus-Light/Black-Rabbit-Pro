using System;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class Tweens : MonoBehaviour
{
    public static void FadeSprite(string name, float start, float end, float time, Action callback)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        SpriteRenderer renderer = trans.GetComponent<SpriteRenderer>();
        if (renderer != null)
        {
            renderer.color = new Color(renderer.color.r, renderer.color.g, renderer.color.b, start);
            renderer.DOFade(end, time).OnComplete(() =>
            {
                callback();
            });
        }
        else
        {
            Debug.LogError("No SpriteRender in " + name);
        }

    }

    public static void MoveFrom(string name, Vector3 from, float time, Action callback)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            Vector3 to = trans.position;
            trans.position = from;
            trans.DOMove(to, time).OnComplete(() =>
            {
                callback();
            });
        }
        else
        {
            Debug.LogError("Can not find " + name);
        }

    }

    public static void MoveTo(string name, Vector3 to, float time, Action callback)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            trans.DOMove(to, time).OnComplete(() =>
            {
                callback();
            });
        }
        else
        {
            Debug.LogError("Can not find " + name);
        }

    }
}
