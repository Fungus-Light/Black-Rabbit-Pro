using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//this is a simple tool to open/disable the mouse cur
[AddComponentMenu("Black-Rabbit/Tools/MouseCur")]
public class MouseCur : MonoBehaviour
{
    public bool isHide=false;
    void Start()
    {
        if (isHide)
        {
            Cursor.lockState = CursorLockMode.Locked;
        }
        Cursor.visible = !isHide;
    }
}
