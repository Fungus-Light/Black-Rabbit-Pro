using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Playables;

public static class TimelineHelper
{
    private static readonly WaitForEndOfFrame _waitForEndOfFrame = new WaitForEndOfFrame();

    public static PlayableDirector GetTimeline(string name)
    {
        Transform trans = GameObjectHelper.GetTransformByName(name);
        if (trans != null)
        {
            return trans.GetComponent<PlayableDirector>();
        }
        else
        {
            return null;
        }
    }

    public static bool ApproxEquals(this double a, double b)
    {
        return Mathf.Approximately((float)a, (float)b);
    }

    public static bool ApproxEquals(this double a, float b)
    {
        return Mathf.Approximately((float)a, b);
    }

    public static void ReverseTimeline(PlayableDirector PD, System.Action cb)
    {
        TimelinePlayer.Instance.StartCoroutine(_ReverseTimeline(PD, cb));
    }

    public static IEnumerator _ReverseTimeline(PlayableDirector PD, System.Action cb)
    {
        DirectorUpdateMode defaultMode = PD.timeUpdateMode;
        PD.timeUpdateMode = DirectorUpdateMode.Manual;
        if (PD.time.ApproxEquals(PD.duration) || PD.time.ApproxEquals(0))
        {
            PD.time = PD.duration;
        }
        PD.Evaluate();

        yield return _waitForEndOfFrame;

        float dt = (float)PD.duration;
        while (dt > 0)
        {
            dt -= Time.deltaTime;
            PD.time = Mathf.Max(dt, 0);
            PD.Evaluate();
            yield return _waitForEndOfFrame;
        }

        PD.time = 0;
        PD.timeUpdateMode = defaultMode;
        PD.Evaluate();
        PD.Stop();
        yield return _waitForEndOfFrame;
        cb();
    }
}
