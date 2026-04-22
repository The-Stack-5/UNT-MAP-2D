using UnityEngine;

public class MapButton : MonoBehaviour
{
    public MapNavigator navigator;

    public void FindPath()
    {
        if (navigator == null)
            return;

        navigator.ComputePath();
    }

    public void ResetPath()
    {
        if (navigator == null)
            return;

        navigator.ResetPath();
    }
}