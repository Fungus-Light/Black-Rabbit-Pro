using UnityEngine;

public class CharacterManager : MonoBehaviour
{
    public static CharacterManager GetCharacterManager(string n)
    {
        Transform trans = GameObjectHelper.GetTransformByName(n);
        if (trans != null)
        {
            return trans.GetComponent<CharacterManager>();
        }
        else
        {
            return null;
        }
    }

    public ICharacterController CharacterController;


    void Awake()
    {
        CharacterController = GetComponent<ICharacterController>();
    }

    public void EnableCharacterMovement(){
        CharacterController.EnableMovement();
    }

    public void DisableCharacterMovement(){
        CharacterController.DisableMovement();
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
