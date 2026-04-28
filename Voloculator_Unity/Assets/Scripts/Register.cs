using UnityEngine;
using TMPro;

public class Register : MonoBehaviour
{
    void Start()
    {
        if (panelRepeatPassw != null)
        {
            panelRepeatPassw.SetActive(false);
        }
    }

    public TMP_InputField inputName;
    public TMP_InputField inputLastName;
    public TMP_InputField DateBirth;
    public TMP_InputField inputEmail;
    public TMP_InputField inputUsername;
    public TMP_InputField inputPassword;
    public TMP_InputField inputRepeatPassw;
    public GameObject panelRepeatPassw;

    public void ClickRegister()
    {
        Debug.Log("--- PROCESANDO REGISTRO ---");

        if (inputPassword.text == inputRepeatPassw.text)
        {
            Debug.Log("Usuario registrado: " + inputUsername.text);
            panelRepeatPassw.SetActive(false);
        }
        else
        {
            Debug.Log("Las constraseñas no coinciden");
            panelRepeatPassw.SetActive(true); //Muestra el mensaje de error
        }
    }
}

