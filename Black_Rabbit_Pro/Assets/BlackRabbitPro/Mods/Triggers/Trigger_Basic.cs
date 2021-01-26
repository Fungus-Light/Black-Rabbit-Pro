using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Black_Rabbit;

public class Trigger_Basic : MonoBehaviour,ITrigger
{
    public GameType gameType{get;set;}
    public bool isShow{get;set;}
    public string Name{get;set;}
    public string Message{get;set;}

    public Transform MessagePos{get;set;}
    public SimpleOutline outlineOBJ{
        get;set;
    }
    public void MakeUseful(){
        
    }
    public void MakeUseless(){

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
