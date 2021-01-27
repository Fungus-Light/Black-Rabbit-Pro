using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Black_Rabbit
{
    public class FPSCameraDetector : MonoBehaviour, ICameraDetector
    {
        public float detectRange { get; set; }                                   // Distance in Unity units over which the player can fire
        private Camera Cam;                                              // Holds a reference to the first person camera                                           // Float to store the time the player will be allowed to fire again, after firing

        public bool isDebug = false;

        public bool ISDetecting { get; set; }

        private IActionTrigger prevTrigger;

        void Start()
        {
            ISDetecting = false;
            Cam = GetComponent<Camera>();
        }

        public void StartDetecting()
        {
            ISDetecting = true;
        }

        public void StopDetecting()
        {
            ISDetecting = false;
        }

        void Update()
        {
            if (ISDetecting)
            {
                Vector3 rayOrigin = Cam.ViewportToWorldPoint(new Vector3(0.5f, 0.5f, 0.0f));

                // 声明射线
                RaycastHit hit;

                // 检查是否碰到任何物体
                if (Physics.Raycast(rayOrigin, Cam.transform.forward, out hit, detectRange))
                {

                    // Get a reference to a health script attached to the collider we hit
                    IActionTrigger item = hit.collider.GetComponent<IActionTrigger>();

                    if (isDebug)
                    {
                        Debug.DrawLine(rayOrigin, hit.point, Color.green);
                    }

                    if (item != null)
                    {
                        if (item != prevTrigger)
                        {
                            CLearPrev();
                            prevTrigger = item;
                            if (item.GameType == GameType.FPS)
                            {
                                item.MakeInterActable();
                                foreach (string key in item.EnterAct.Keys)
                                {
                                    item.EnterAct[key]();
                                }
                            }
                        }

                    }
                    else
                    {
                        CLearPrev();
                    }
                }
                else
                {
                    CLearPrev();
                }
            }

        }

        public void CLearPrev()
        {
            if (prevTrigger != null)
            {
                if (prevTrigger.GameType == GameType.FPS)
                {
                    foreach (string key in prevTrigger.LeaveAct.Keys)
                    {
                        prevTrigger.LeaveAct[key]();
                    }
                    prevTrigger.MakeDisInterActable();
                    prevTrigger.MakeUseless();
                }

                prevTrigger = null;

            }
        }

    }
}

