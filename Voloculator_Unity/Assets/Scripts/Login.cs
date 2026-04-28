using TMPro;
using UnityEngine;

public class Login : MonoBehaviour
{   
    public TMP_InputField InputUsername;
    public TMP_InputField InputPassword;
    public GameObject panelError;

    private void Start()
    {
        if (panelError != null)
        {
            panelError.SetActive(false);
        }
    }



    public void ClickLogin()
    {
        string usuario = InputUsername.text;
        string password = InputPassword.text;

        Debug.Log("-- INTENTO DE LOGIN --");
        Debug.Log("Usuario introducido: " + usuario);
        Debug.Log("Contraseña introducida: " + password);

        if (usuario == "admin" && password == "admin")
        {
            Debug.Log("Resultado: Acceso Permitido");
        }
        else
        {
            Debug.Log("Resultado: Acceso Denegado");
            panelError.SetActive(true); //Muestra el mensaje de error
        }
    }

    public void ClickResetPassword()
    {
        Debug.Log("Botón de reset password pulsado");
    }

}
