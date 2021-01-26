using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;
using System;
using UnityEngine.Playables;
using UnityEngine.InputSystem;
using Black_Rabbit;

[Configure]
public class BindConfig
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                typeof(Application),
                typeof(Screen),
                typeof(Debug),
                typeof(Vector3),
                typeof(Vector2),
                typeof(List<int>),
                typeof(Dictionary<string, List<int>>),
                typeof(Time),
                typeof(Transform),
                typeof(AudioSource),
                typeof(Component),
                typeof(GameObject),
                typeof(UnityEngine.Object),
                typeof(Delegate),
                typeof(System.Object),
                typeof(Type),
                typeof(ParticleSystem),
                typeof(Canvas),
                typeof(Behaviour),
                typeof(MonoBehaviour),
                typeof(System.IO.Path),
                typeof(JsBehaviour),
                typeof(LevelRunner),

                typeof(Gamepad),
                typeof(Keyboard),
                typeof(Mouse),
                typeof(FileHelper),
                typeof(GameObjectHelper),
                typeof(CommonJsCall),
                typeof(TimelineHelper),
                typeof(PlayableDirector),
                typeof(CharacterManager),
                typeof(ITrigger),
                typeof(TriggerHelper),
                typeof(SimpleOutline),
                typeof(GameType)
            };
        }
    }

    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                //打开这个可以优化Vector3的GC，但需要开启unsafe编译
                //typeof(Vector3),
            };
        }
    }
}
