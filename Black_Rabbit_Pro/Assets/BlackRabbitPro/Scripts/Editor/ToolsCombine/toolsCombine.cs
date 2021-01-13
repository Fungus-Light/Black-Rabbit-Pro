using UnityEditor;
using UnityEngine;
using UnityEngine.UIElements;
using UnityEditor.UIElements;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor.Experimental.SceneManagement;
using UnityEditor.SceneManagement;

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

    [MenuItem("Tools/�������ߺϼ� #&t")]
    public static void ShowWindows()
    {
        toolsCombine wnd = GetWindow<toolsCombine>();
        wnd.titleContent = new GUIContent("���ߺϼ�");
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

        items.Add(new FuncItem("˵��", "index"));
        items.Add(new FuncItem("����������������", "quickrename"));

        items.Add(new FuncItem("�ؿ�����", "leveldebug"));
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

        page_Index.Add(new Label("���ǽ����ֹ������ϵĴ���"));
        page_Index.Add(new Label("��ݼ���shift + alt + t"));

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

        page_QuickRename.Add(new Label("��ѡ��Ҫ������������ĸ��ڵ�"));
        page_QuickRename.Add(new Label("һ����ֻѡ��һ��"));
        page_QuickRename.Add(new Label("��ѡ������ֻ������һ��"));
        page_QuickRename.Add(new Label("------------------------"));
        Page_QuickName param = new Page_QuickName();

        var page_QuickRename_basename = new TextField("��������ģ��")
        {
            value = param.baseName,
            viewDataKey = "page_QuickRename_basename"
        };

        var page_QuickRename_isFGO = new Toggle("�Ƿ��FGO��׺")
        {
            viewDataKey = "page_QuickRename_isFGO"
        };

        var page_QuickRename_isFromOne = new Toggle("�Ƿ��1��ʼ")
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
            text = "ȷ��",
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
        public string baseName = "����ģ��";
        public bool isFGO = false;
        public bool isFromOne = false;

        public void ReNameIt(Transform[] trans)
        {

            Debug.Log("����ģ�壺" + baseName);
            if (isFGO)
            {
                Debug.Log("�������_FGO��׺");
            }
            if (isFromOne)
            {
                Debug.Log("�����1��ʼ");
            }

            Transform _parent = trans[0];
            Debug.Log("���ڵ�Ϊ��" + _parent.name);
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
                    _n += "_FGO";
                }

                _parent.GetChild(k).gameObject.name = _n;
                Debug.Log(oldname + " ��������Ϊ " + _n);
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
                Debug.Log("������ʱ�޷�ע��js����");
                return;
            }
            if (RunEnv.GlobalJsEnv != null)
            {
                RunEnv.GlobalJsEnv.Eval(code);

            }
            else
            {
                Debug.LogError("δ���ҵ�js����");
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