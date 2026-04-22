using UnityEngine;

public class MapClick : MonoBehaviour
{
    public Camera mapCamera;
    public Transform YouAreHere;
    public Collider2D[] Boundries;
    public LayerMask classroomLayer;

    public MapNavigator navigator;

    private bool isFirstClick = true;

    void Update()
    {
        if (mapCamera == null || YouAreHere == null || Boundries == null || Boundries.Length == 0)
        {
            Debug.LogError("MapClick: Missing references");
            return;
        }

        if (!Input.GetMouseButtonDown(0))
            return;

        Vector3 clickPos = mapCamera.ScreenToWorldPoint(Input.mousePosition);
        clickPos.z = 0f;

        Collider2D hit = Physics2D.OverlapPoint(clickPos, classroomLayer);

        if (hit != null)
        {
            ClassroomHotspot hotspot = hit.GetComponent<ClassroomHotspot>();

            if (hotspot != null)
            {
                Vector3 targetPos = hotspot.GetDestination();
                targetPos.z = 0f;

                HandleClickPosition(targetPos);
                return;
            }
        }

        foreach (Collider2D wall in Boundries)
        {
            if (wall != null && wall.OverlapPoint(clickPos))
            {
                HandleClickPosition(clickPos);
                return;
            }
        }

        Debug.Log("Clicked outside valid area.");
    }

    private void HandleClickPosition(Vector3 pos)
    {
        YouAreHere.position = pos;

        if (navigator == null)
        {
            Debug.LogError("MapClick: Navigator not assigned in Inspector");
            return;
        }

        navigator.AddClickPosition(pos);

        if (isFirstClick)
        {
            isFirstClick = false;
        }
    }
}