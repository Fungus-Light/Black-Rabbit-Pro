using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraTarget : MonoBehaviour
{
    public static CameraTarget Instance;

    void Awake(){
        if(Instance==null){
            Instance=this;
        }
    }
}
