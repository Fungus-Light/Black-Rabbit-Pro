using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameObjectPool : MonoBehaviour
{
    public static GameObjectPool Instance;
    public List<Transform> gameObjectPool;
    private Dictionary<string, bool> NameDic;
    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        gameObjectPool = new List<Transform>();

        NameDic = new Dictionary<string, bool>();

        foreach (GameObject go in Resources.FindObjectsOfTypeAll<GameObject>())
        {
            if (go.name.StartsWith("$_"))
            {
                if (NameDic.ContainsKey(go.name))
                {
                    Debug.LogError("Exist Two Or More " + go.name);
                }
                else
                {
                    gameObjectPool.Add(go.transform);
                    NameDic.Add(go.name, true);
                }
            }
        }
    }

    public Transform Find(string n)
    {
        if (gameObjectPool.Count <= 0)
        {
            return null;
        }
        else
        {
            for (int i = 0; i < gameObjectPool.Count; i++)
            {
                if (gameObjectPool[i].name == n)
                {
                    return gameObjectPool[i];
                }
            }
        }
        return null;
    }
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {

    }
}
