using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Black_Rabbit;

[RequireComponent(typeof(Collider))]
[RequireComponent(typeof(AudioSource))]
public class Trigger_Basic : MonoBehaviour, ITrigger
{
    private GameType gameType;
    public GameType GameType
    {
        get
        {
            return gameType;
        }
        set
        {
            gameType = value;
        }
    }
    public bool isShow { get; set; }
    public string Name { get; set; }
    public string Message { get; set; }

    public Transform MessagePos { get; set; }
    public SimpleOutline outlineOBJ
    {
        get; set;
    }
    public void MakeUseful()
    {
        isShow = true;
    }
    public void MakeUseless()
    {
        isShow = false;
    }
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }
}
