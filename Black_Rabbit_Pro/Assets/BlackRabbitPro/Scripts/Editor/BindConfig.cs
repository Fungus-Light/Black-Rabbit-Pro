using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Puerts;
using System;
using UnityEngine.Playables;
using Cinemachine;
using Black_Rabbit;
using UnityEngine.UI;
using UnityEngine.Events;
using UnityEngine.EventSystems;

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

                typeof(LevelRunner),

                typeof(FileHelper),
                typeof(GameObjectHelper),
                typeof(CommonJsCall),
                typeof(TimelineHelper),
                typeof(PlayableDirector),

                typeof(CharacterManager),

                typeof(ITrigger),
                typeof(IActionTrigger),
                typeof(TriggerHelper),
                typeof(SimpleOutline),
                typeof(GameType),

                typeof(CinemachineBrain),
                typeof(ICameraDetector),
                typeof(CameraManager),

                typeof(UIHelper),
                typeof(Button),
                typeof(InputField),
                
                typeof(UnityEvent),
                typeof(UnityEvent<string>),
                typeof(Text),
                typeof(Canvas),
                typeof(Input),
                typeof(KeyCode),

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
