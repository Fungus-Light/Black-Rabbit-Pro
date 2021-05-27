using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DontDestroyMe : MonoBehaviour
{
    private bool isExist = false;
    void Awake()
    {
        if (isExist == false)
        {
            DontDestroyOnLoad(this.gameObject);
            isExist = true;
        }
    }
}
