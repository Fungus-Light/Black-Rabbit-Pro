using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;
using UnityEditor.UIElements;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor.Experimental.SceneManagement;
using UnityEditor.SceneManagement;
using UnityEngine.Playables;

public class toolsCombine : EditorWindow
{
    class FuncItem
    {
        public string key = "Item";
        public string target = "Item";
        public FuncItem(string k, string t)
        {
            key = k;
            target = t;
        }
    }

    List<FuncItem> items = new List<FuncItem>();

    [MenuItem("Tools/开发工具合集 #&t")]
    public static void ShowWindows()
    {
        toolsCombine wnd = GetWindow<toolsCombine>();
        wnd.titleContent = new GUIContent("开发工具合集");
    }

    Length Percent(float v)
    {
        return Length.Percent(v);
    }

    Func<VisualElement> makeItem = () =>
    {
        var box = new VisualElement();
        box.style.flexDirection = FlexDirection.Column;

        box.Add(new Label());
        return box;
    };

    public void OnEnable()
    {
        // Each editor window contains a root VisualElement object
        VisualElement root = rootVisualElement;

        Action<VisualElement, int> bindItem = (e, i) => (e.ElementAt(0) as Label).text = items[i].key;

        items.Add(new FuncItem("说明", "index"));
        items.Add(new FuncItem("快速重命名子物体", "quickrename"));

        //items.Add(new FuncItem("关卡调试", "leveldebug"));
        //root.Add(debugBTN);

        //tool bar

        var toolbar = new Toolbar()
        {
            style =
            {
                paddingTop=3,
                paddingBottom=3,
                height=26,

            }
        };


        toolbar.Add(new ToolbarButton(() =>
        {
            foreach (PlayableDirector pd in Resources.FindObjectsOfTypeAll<PlayableDirector>())
            {
                pd.playOnAwake = false;
                // if (pd.transform.GetComponent<TimelinePlayer>() == null)
                // {
                //     pd.gameObject.AddComponent<TimelinePlayer>();
                // }
            }
        })
        {
            text = "初始化所有Timeline"
        });


        root.Add(toolbar);

        //main
        var Main = new VisualElement()
        {
            style =
            {
                width=Percent(100),
                height=Percent(100),
                flexDirection=FlexDirection.Row,
            }
        };

        root.Add(Main);

        //left 
        var leftBox = new VisualElement()
        {
            name = "leftBox",
            style =
            {
                width=200,
                height=Percent(100),

                borderRightColor=Color.black,
                borderRightWidth=2

            }
        };

        //right
        var rightBox = new VisualElement()
        {
            name = "rightbox",
            style =
            {
                width=Percent(100),
                height=Percent(100),


            }
        };
        Main.Add(leftBox);
        Main.Add(rightBox);

        var FuncList = new ListView()
        {
            bindItem = bindItem,
            makeItem = makeItem,
            itemsSource = items,
            style =
            {
                width=Percent(100),
                height=Percent(100),

            },
            selectionType = SelectionType.Single,
            itemHeight = 20
        };

        FuncList.onSelectionChanged += (objects) =>
        {
            FuncItem item = (FuncItem)objects[0];
            //Debug.Log(item.key + " will open " + item.target);

            for (int i = 0; i < rightBox.childCount; i++)
            {
                rightBox.ElementAt(i).visible = false;
                rightBox.ElementAt(i).style.height = 0;
            }

            root.Query(name = item.target).ForEach((element) =>
            {
                element.visible = true;
                element.style.height = Percent(100);
            });
        };

        leftBox.Add(FuncList);

        //Add Index Function 

        var page_Index = new VisualElement()
        {
            name = "index",
            visible = true,

        };

        page_Index.Add(new Label("一些有用工具合集"));
        page_Index.Add(new Label("快捷键 shift + alt + t"));

        rightBox.Add(page_Index);


        //Add Quick Rename

        var page_QuickRename = new VisualElement()
        {
            name = "quickrename",
            style =
            {
                width=400
            },
            visible = false
        };

        page_QuickRename.Add(new Label("先选中父物体"));
        page_QuickRename.Add(new Label("然后设置参数"));
        page_QuickRename.Add(new Label("一次请只选择一个物体"));
        page_QuickRename.Add(new Label("------------------------"));
        Page_QuickName param = new Page_QuickName();

        var page_QuickRename_basename = new TextField("名字模板")
        {
            value = param.baseName,
            viewDataKey = "page_QuickRename_basename"
        };

        var page_QuickRename_isFGO = new Toggle("是否注入对象列表")
        {
            viewDataKey = "page_QuickRename_isFGO"
        };

        var page_QuickRename_isFromOne = new Toggle("是否从1开始")
        {
            viewDataKey = "page_QuickRename_isFromOne"
        };

        var page_QuickRename_actButtom = new Button(() =>
        {
            param.baseName = page_QuickRename_basename.text;
            param.isFGO = page_QuickRename_isFGO.value;
            param.isFromOne = page_QuickRename_isFromOne.value;
            param.ReNameIt(Selection.transforms);
        })
        {
            text = "重命名",
            style =
            {
                width=200
            }
        };

        page_QuickRename.Add(page_QuickRename_basename);
        page_QuickRename.Add(page_QuickRename_isFGO);
        page_QuickRename.Add(page_QuickRename_isFromOne);
        page_QuickRename.Add(page_QuickRename_actButtom);

        rightBox.Add(page_QuickRename);


        //Lua Injector

        Page_LevelDugger page_LevelDugger = new Page_LevelDugger();
        page_LevelDugger.CreateUI("leveldebug", rightBox);


    }

    class Page_QuickName
    {
        public string baseName = "名字模板";
        public bool isFGO = false;
        public bool isFromOne = false;

        public void ReNameIt(Transform[] trans)
        {

            Debug.Log("使用模板" + baseName);
            if (isFGO)
            {
                Debug.Log("将会注入游戏对象列表");
            }
            if (isFromOne)
            {
                Debug.Log("将会从1开始");
            }

            Transform _parent = trans[0];
            Debug.Log("父物体名称为: " + _parent.name);
            for (int k = 0; k < _parent.childCount; k++)
            {
                string oldname = _parent.GetChild(k).name;
                string _n = baseName;
                if (isFromOne)
                {
                    _n += (k + 1).ToString();
                }
                else
                {
                    _n += k.ToString();
                }

                if (isFGO)
                {
                    _n = "$_" + _n;
                }

                _parent.GetChild(k).gameObject.name = _n;
                Debug.Log(oldname + " 被重命名为 " + _n);
            }

            UnityEditor.Experimental.SceneManagement.PrefabStage prefabStage = UnityEditor.Experimental.SceneManagement.PrefabStageUtility.GetCurrentPrefabStage();
            if (prefabStage != null)
            {
                EditorUtility.SetDirty(prefabStage.prefabContentsRoot);

            }

        }


    }

    class QuickTool_SwitchPrefabs
    {
        public string KEY_CURRENT_PREFABS = "key_current_prefab";

        public QuickTool_SwitchPrefabs(string key)
        {
            KEY_CURRENT_PREFABS = key;
        }

    }

    class Page_LevelDugger
    {
        public void Excute(string code)
        {
            if (EditorApplication.isPlaying == false)
            {
                Debug.Log("work only in Play mode");
                return;
            }
            if (RunEnv.GlobalJsEnv != null)
            {
                RunEnv.GlobalJsEnv.Eval(code);

            }
            else
            {
                Debug.LogError("无法使用");
            }


        }

        public void CreateUI(string n, VisualElement parent)
        {
            var page_LevelDebugger = new VisualElement()
            {
                name = n,
                style =
            {
                width=400
            },
                visible = false
            };

            IntegerField text_levelNum = new IntegerField("�ؿ�level");
            text_levelNum.viewDataKey = "page_LevelDebugger_level_num";
            IntegerField text_partNum = new IntegerField("�ؿ�part");
            text_partNum.viewDataKey = "page_LevelDebugger_part_num";
            Button btn_Jump = new Button(() =>
            {
                int levelnum = text_levelNum.value;
                int partnum = text_partNum.value;
                Excute("GoLevel(" + levelnum + ", " + partnum + ")");
            })
            {
                text = "��ת",
                style = {
                width=300
            },
            };

            page_LevelDebugger.Add(text_levelNum);
            page_LevelDebugger.Add(text_partNum);
            page_LevelDebugger.Add(btn_Jump);
            page_LevelDebugger.Add(new Label(" "));

            Button btn_return = new Button(() =>
            {
                Excute("GoScene(UiDef.Levels)");
            })
            {
                style =
                {
                    width=300
                }
            };
            btn_return.text = "����ѡ��";

            Button btn_next = new Button(() =>
            {
                Excute("GoNextLevelPart()");
            })
            {
                style =
                {
                    width=300
                }
            };
            btn_next.text = "������һpart";

            page_LevelDebugger.Add(btn_return);
            page_LevelDebugger.Add(btn_next);

            parent.Add(page_LevelDebugger);
        }
    }


}