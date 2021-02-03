using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundLib : MonoBehaviour
{
    public SoundConfig config;
    public static SoundLib Instance;

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
    }

    public static SoundLib GetSoundLib()
    {
        return Instance;
    }

    public AudioClip GetSound(string tag)
    {
        foreach(TagSound ts in config.SoundLib){
            if(ts.tag==tag){
                return ts.clip;
            }
        }
        return null;
    }

    public AudioClip GetMusic(string tag){
        foreach(TagSound ts in config.MusicLib){
            if(ts.tag==tag){
                return ts.clip;
            }
        }
        return null;
    }
}
