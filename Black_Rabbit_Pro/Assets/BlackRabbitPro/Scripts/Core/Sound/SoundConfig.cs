using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using NaughtyAttributes;

[System.Serializable]
public class TagSound
{
    public string tag;
    public AudioClip clip;
    public TagSound()
    {
        tag = "";
        clip = null;
    }

    public TagSound(string t, AudioClip c)
    {
        tag = t;
        clip = c;
    }
}
[CreateAssetMenu(menuName = "BlackRabbit/SoundConfig", order = 1)]
public class SoundConfig : ScriptableObject
{
    public List<TagSound> SoundLib;
    public List<TagSound> MusicLib;

    [HorizontalLine(color: EColor.Blue)]
    public string tag;
    public AudioClip clip;

    [Button("Add To Music Lib")]
    public void AddToMusic()
    {
        if (tag != "" && clip != null)
        {
            foreach (TagSound ts in MusicLib)
            {
                if (ts.tag == tag)
                {
                    Debug.LogError("Already Exist Music " + tag);
                    return;
                }
            }
            MusicLib.Add(new TagSound(tag, clip));
        }
    }

    [Button("Add To Sound Lib")]
    public void AddToSound()
    {
        if (tag != "" && clip != null)
        {
            foreach (TagSound ts in SoundLib)
            {
                if (ts.tag == tag)
                {
                    Debug.LogError("Already Exist Sound " + tag);
                    return;
                }
            }
            SoundLib.Add(new TagSound(tag, clip));
        }
    }

    [Button("Clear Music Lib")]
    public void ClearMusic()
    {
        MusicLib.Clear();
    }

    [Button("Clear Sound Lib")]
    public void ClearSound()
    {
        SoundLib.Clear();
    }
}
