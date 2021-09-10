using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameObjectPool : MonoBehaviour
{
    public static GameObjectPool Instance;
    public List<Transform> gameObjectPool;
    private Dictionary<string, Transform> gameObjects;
    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        gameObjectPool = new List<Transform>();

        gameObjects = new Dictionary<string, Transform>();

        foreach (GameObject go in Resources.FindObjectsOfTypeAll<GameObject>())
        {
            if (go.name.StartsWith("$_") && go.scene.name != null)
            {
                //Debug.LogWarning(go.scene.name);
                if (gameObjects.ContainsKey(go.name))
                {
                    Debug.LogError("Exist Two Or More " + go.name);
                }
                else
                {
                    gameObjectPool.Add(go.transform);
                    gameObjects.Add(go.name, go.transform);
                }
            }
        }
    }

    public Transform Find(string n)
    {
        if (gameObjects.Count <= 0)
        {
            return null;
        }
        else
        {
            if (gameObjects.ContainsKey(n))
            {
                return gameObjects[n];
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
