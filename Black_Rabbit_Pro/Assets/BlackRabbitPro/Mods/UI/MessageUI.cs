using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MessageUI : MonoBehaviour,IMessageBar
{
    public static MessageUI Instance;

    void Awake(){
        if(Instance==null){
            Instance=this;
        }
    }

    public void HideMessage(){
        
    }

    public void ShowMessage(string _name,string _message,Transform _pos){
        
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
