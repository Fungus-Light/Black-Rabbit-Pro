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

    [MenuItem("Tools/Dev Tools Combine #&t")]
    public static void ShowWindows()
    {
        toolsCombine wnd = GetWindow<toolsCombine>();
        wnd.titleContent = new GUIContent("Dev Tools");
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

        items.Add(new FuncItem("README", "index"));
        items.Add(new FuncItem("Quick Rename", "quickrename"));

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
            }
        })
        {
            text = "Init all Timeline"
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

        page_Index.Add(new Label("Some Useful Tools"));
        page_Index.Add(new Label("Short Cut shift + alt + t"));

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

        page_QuickRename.Add(new Label("Select Parent Obj,"));
        page_QuickRename.Add(new Label("Then Select The Options,"));
        page_QuickRename.Add(new Label("Select One Obj At Once"));
        page_QuickRename.Add(new Label("------------------------"));
        Page_QuickName param = new Page_QuickName();

        var page_QuickRename_basename = new TextField("Name Template")
        {
            value = param.baseName,
            viewDataKey = "page_QuickRename_basename"
        };

        var page_QuickRename_isFGO = new Toggle("Is Injected")
        {
            viewDataKey = "page_QuickRename_isFGO"
        };

        var page_QuickRename_isFromOne = new Toggle("Start From One")
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
            text = "Rename It",
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

    }

    class Page_QuickName
    {
        public string baseName = "Name Template";
        public bool isFGO = false;
        public bool isFromOne = false;

        public void ReNameIt(Transform[] trans)
        {

            Debug.Log("Use Template " + baseName);
            if (isFGO)
            {
                Debug.Log("Will Inject To Game Object Pools.");
            }
            if (isFromOne)
            {
                Debug.Log("Will Start From 1");
            }

            Transform _parent = trans[0];
            Debug.Log("Parent Obj is : " + _parent.name);
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
                Debug.Log(oldname + " will be renamed to " + _n);
            }

            UnityEditor.Experimental.SceneManagement.PrefabStage prefabStage = UnityEditor.Experimental.SceneManagement.PrefabStageUtility.GetCurrentPrefabStage();
            if (prefabStage != null)
            {
                EditorUtility.SetDirty(prefabStage.prefabContentsRoot);

            }

        }


    }
}