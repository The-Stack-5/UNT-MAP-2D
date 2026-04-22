using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(LineRenderer))]
public class MapNavigator : MonoBehaviour
{
    public Transform YouAreHere;
    public float walkSpeed = 0.1f;
    public PolygonCollider2D[] Boundaries;

    private Vector3 startClick;
    private Vector3 endClick;

    private bool hasStart;
    private bool hasEnd;
    private bool waitingForEnd;

    private List<Waypoint> currentPath = new List<Waypoint>();
    private List<Vector3> pathPoints = new List<Vector3>();

    private LineRenderer line;
    private Coroutine walkRoutine;

    void Awake()
    {
        line = GetComponent<LineRenderer>();
        line.material = new Material(Shader.Find("Sprites/Default"));
        line.startWidth = 0.15f;
        line.endWidth = 0.15f;
        line.useWorldSpace = true;
        line.positionCount = 0;
        line.sortingOrder = 100;
    }

    public void AddClickPosition(Vector3 pos)
    {
        if (!waitingForEnd)
        {
            startClick = pos;
            hasStart = true;
            waitingForEnd = true;
        }
        else
        {
            endClick = pos;
            hasEnd = true;
            waitingForEnd = false;
        }
    }

    public void RunFromButton(Vector3 start, Vector3 end)
    {
        startClick = start;
        endClick = end;
        hasStart = true;
        hasEnd = true;
        waitingForEnd = false;

        ComputePath();
    }

    public void ResetPath()
    {
        currentPath.Clear();
        pathPoints.Clear();
        line.positionCount = 0;

        hasStart = false;
        hasEnd = false;
        waitingForEnd = false;

        if (walkRoutine != null)
            StopCoroutine(walkRoutine);
    }

    public void ComputePath()
    {
        if (!hasStart || !hasEnd || Boundaries == null || Boundaries.Length == 0)
            return;

        currentPath.Clear();
        pathPoints.Clear();
        line.positionCount = 0;

        if (walkRoutine != null)
            StopCoroutine(walkRoutine);

        if (!IsInsideBoundaries(startClick) || !IsInsideBoundaries(endClick))
            return;

        Waypoint startNode = CreateTempWaypoint(startClick);
        Waypoint endNode = CreateTempWaypoint(endClick);

        if (startNode == null || endNode == null)
            return;

        currentPath = BFS(startNode, endNode);
        BuildPathPoints();
        DrawPath();

        if (YouAreHere != null && pathPoints.Count > 0)
            walkRoutine = StartCoroutine(WalkPath());
        Destroy(startNode.gameObject);
        Destroy(endNode.gameObject);
    }

    private bool IsInsideBoundaries(Vector3 pos)
    {
        foreach (PolygonCollider2D poly in Boundaries)
        {
            if (poly != null && poly.OverlapPoint(pos))
                return true;
        }
        return false;
    }

    private Waypoint CreateTempWaypoint(Vector3 clickPos)
    {
        GameObject tempGO = new GameObject("TempWaypoint");
        tempGO.transform.position = clickPos;

        Waypoint tempWP = tempGO.AddComponent<Waypoint>();
        tempWP.neighbors = new List<Waypoint>();

        foreach (Waypoint wp in FindObjectsOfType<Waypoint>())
        {
            if (wp == null || !IsInsideBoundaries(wp.transform.position))
                continue;

            if (IsLineInsideBoundaries(clickPos, wp.transform.position))
            {
                tempWP.neighbors.Add(wp);
                wp.neighbors.Add(tempWP);
            }
        }

        return tempWP;
    }

    private bool IsLineInsideBoundaries(Vector3 a, Vector3 b)
    {
        int steps = 10;

        for (int i = 0; i <= steps; i++)
        {
            Vector3 point = Vector3.Lerp(a, b, i / (float)steps);

            if (!IsInsideBoundaries(point))
                return false;
        }

        return true;
    }

    private List<Waypoint> BFS(Waypoint start, Waypoint goal)
    {
        Queue<Waypoint> queue = new Queue<Waypoint>();
        Dictionary<Waypoint, Waypoint> cameFrom = new Dictionary<Waypoint, Waypoint>();
        HashSet<Waypoint> visited = new HashSet<Waypoint>();

        queue.Enqueue(start);
        visited.Add(start);
        cameFrom[start] = null;

        while (queue.Count > 0)
        {
            Waypoint current = queue.Dequeue();

            if (current == goal)
                break;

            List<Waypoint> sortedNeighbors = new List<Waypoint>(current.neighbors);

            if (sortedNeighbors.Count > 1)
            {
                sortedNeighbors.Sort((a, b) =>
                {
                    float distA = Vector3.Distance(a.transform.position, goal.transform.position);
                    float distB = Vector3.Distance(b.transform.position, goal.transform.position);
                    return distA.CompareTo(distB);
                });
            }

            foreach (Waypoint neighbor in sortedNeighbors)
            {
                if (neighbor == null || visited.Contains(neighbor))
                    continue;

                visited.Add(neighbor);
                cameFrom[neighbor] = current;
                queue.Enqueue(neighbor);
            }
        }

        if (!cameFrom.ContainsKey(goal))
            return new List<Waypoint>();

        List<Waypoint> path = new List<Waypoint>();
        Waypoint step = goal;

        while (step != null)
        {
            path.Insert(0, step);
            step = cameFrom[step];
        }

        return path;
    }

    private void BuildPathPoints()
    {
        pathPoints.Clear();

        foreach (Waypoint wp in currentPath)
        {
            if (IsInsideBoundaries(wp.transform.position))
                pathPoints.Add(wp.transform.position);
        }
    }

    private void DrawPath()
    {
        if (pathPoints.Count == 0)
        {
            line.positionCount = 0;
            return;
        }

        line.positionCount = pathPoints.Count;

        for (int i = 0; i < pathPoints.Count; i++)
        {
            line.SetPosition(i, pathPoints[i]);
        }
    }

    private IEnumerator WalkPath()
    {
        YouAreHere.position = pathPoints[0];

        for (int i = 1; i < pathPoints.Count; i++)
        {
            Vector3 start = YouAreHere.position;
            Vector3 target = pathPoints[i];

            float dist = Vector3.Distance(start, target);
            float t = 0f;

            while (t < 1f)
            {
                t += (walkSpeed / dist) * Time.deltaTime;
                YouAreHere.position = Vector3.Lerp(start, target, t);
                yield return null;
            }

            YouAreHere.position = target;
        }
    }
}