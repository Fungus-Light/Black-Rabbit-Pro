using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Black_Rabbit
{
    public class MyCameraDetector : MonoBehaviour
    {
        public float detectRange = 50f;                                     // Distance in Unity units over which the player can fire
        private Camera Cam;                                              // Holds a reference to the first person camera                                           // Float to store the time the player will be allowed to fire again, after firing
        public IMessageBar ui;

        public bool isDebug = false;

        public bool ISDetecting = true;

        private ITrigger prevTrigger;

        void Start()
        {
            //init camera
            //初始化摄影机
            Cam = GetComponentInParent<Camera>();
            ui = MessageUI.Instance;
            ui.HideMessage();
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
                    ITrigger item = hit.collider.GetComponent<Trigger_Basic>();

                    if (isDebug)
                    {
                        Debug.DrawLine(rayOrigin, hit.point, Color.green);
                    }

                    if (item != null)
                    {
                        
                        if (item.isShow && item.gameType == GameType.FPS)
                        {
                            //item.GetComponent<Outline>().ShowOutLine();
                            ui.ShowMessage(item.Name, item.Message, item.MessagePos.transform);
                            if (item.outlineOBJ != null)
                            {
                                item.outlineOBJ.ShowOutLine();
                            }

                        }


                        CLearPrev();
                        prevTrigger = item;
                        if (item.gameType == GameType.FPS)
                        {
                            item.MakeUseful();
                        }


                    }
                    else
                    {
                        ui.HideMessage();

                        CLearPrev();
                    }
                }
                else
                {
                    ui.HideMessage();
                }
            }
            // 在屏幕中间创建一个Vecter3


        }

        public void CLearPrev()
        {
            if (prevTrigger != null)
            {
                if (prevTrigger.outlineOBJ!=null)
                {
                    prevTrigger.outlineOBJ.HideOutLine();
                }
                prevTrigger.MakeUseless();
                //prevTrigger.GetComponent<Outline>().HideOutLine();
                prevTrigger = null;

            }
        }

    }
}

