using UnityEngine;

public class MapButton : MonoBehaviour
{
    public MapNavigator navigator;

    public void FindPath()
    {
        navigator.ComputePath();
    }

    public void ResetPath()
    {
        navigator.ResetPath();
    }
}