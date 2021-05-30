using System;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;

public class Tweens : MonoBehaviour
{

    public static void Fade(string name, float start, float end, float time, Action callback)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);

        if (trans != null)
        {
            Fade(trans, start, end, time, callback);
        }
        else
        {
            Debug.LogError("No Render in " + name);
        }
    }

    public static void Fade(Transform trans, float start, float end, float time, Action callback)
    {
        if (trans != null)
        {
            var cg = trans.GetComponent<CanvasGroup>();
            if (cg != null)
            {
                cg.alpha = start;
                cg.DOFade(end, time).SetEase(Ease.InQuart).OnComplete(() => { callback?.Invoke(); });
            }
            var img = trans.GetComponent<Image>();
            if (img != null)
            {
                img.color = new Color(img.color.r, img.color.g, img.color.b, start);
                img.DOColor(new Color(img.color.r, img.color.g, img.color.b, end), time).SetEase(Ease.InQuart).OnComplete(() => { callback?.Invoke(); });
            }
            var spr = trans.GetComponent<SpriteRenderer>();
            if (spr != null)
            {
                spr.color = new Color(spr.color.r, spr.color.g, spr.color.b, start);
                spr.DOColor(new Color(spr.color.r, spr.color.g, spr.color.b, end), time).SetEase(Ease.InQuart).OnComplete(() => { callback?.Invoke(); });
            }
            var font = trans.GetComponent<Text>();
            if (font != null)
            {
                font.color = new Color(font.color.r, font.color.g, font.color.b, start);
                font.DOColor(new Color(font.color.r, font.color.g, font.color.b, end), time).SetEase(Ease.InQuart).OnComplete(() => { callback?.Invoke(); });
            }
            var textMesh = trans.GetComponent<TextMesh>();
            if (textMesh != null)
            {
                textMesh.color = new Color(textMesh.color.r, textMesh.color.g, textMesh.color.b, start);
                DOTween.To(() => textMesh.color.a, x => textMesh.color = new Color(textMesh.color.r, textMesh.color.g, textMesh.color.b, x), end, time);
            }
        }
        else
        {
            Debug.LogError("No Render in " + trans.name);
        }

    }

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

    public static void FadeUIGroup(string name, float start, float end, float time, Action callback)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        CanvasGroup renderer = trans.GetComponent<CanvasGroup>();
        if (renderer != null)
        {
            renderer.alpha = start;
            renderer.DOFade(end, time).OnComplete(() =>
            {
                callback();
            });
        }
        else
        {
            Debug.LogError("No CanvasGroup in " + name);
        }
    }

    public static void FadeColorFromTo(Transform trans, string from, string to, float time, Action act = null)
    {
        Color fromColor, toColor;
        if (ColorUtility.TryParseHtmlString(from, out fromColor) && ColorUtility.TryParseHtmlString(to, out toColor))
        {
            var img = trans.GetComponent<Image>();
            if (img != null)
            {
                img.color = fromColor;
                img.DOColor(toColor, time).SetEase(Ease.InQuart).OnComplete(() => { act?.Invoke(); });
            }
            var spr = trans.GetComponent<SpriteRenderer>();
            if (spr != null)
            {
                spr.color = fromColor;
                spr.DOColor(toColor, time).SetEase(Ease.InQuart).OnComplete(() => { act?.Invoke(); });
            }
            var font = trans.GetComponent<Text>();
            if (font != null)
            {
                font.color = fromColor;
                font.DOColor(toColor, time).SetEase(Ease.InQuart).OnComplete(() => { act?.Invoke(); });
            }
        }

    }

    public static void FadeColorFromTo(string name, string from, string to, float time, Action act = null)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            FadeColorFromTo(trans, from, to, time, act);
        }
        else
        {
            Debug.LogError("No Render in " + name);
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

    public static void ScaleFromTo(string name, float from, float to, float time, Action callback)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            Vector3 target = trans.localScale * to;
            trans.localScale = trans.localScale * from;
            trans.DOScale(target, time).OnComplete(() =>
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
