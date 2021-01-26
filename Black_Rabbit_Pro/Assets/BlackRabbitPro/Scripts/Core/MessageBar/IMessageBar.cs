using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IMessageBar
{
    void HideMessage();
    void ShowMessage(string _name, string _message, Transform _pos);
}
