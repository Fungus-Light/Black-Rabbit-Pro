using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface ICameraDetector
{
    float detectRange{get;set;}
    bool ISDetecting { get; set; }
    void StartDetecting();
    void StopDetecting();

    
}
