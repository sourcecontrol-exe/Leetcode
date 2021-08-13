def validTree(n, edges):
    if(n == 0):
        return True

    def dfs(node):
        for neigh in graph[node]:
            if(neigh not in visited):
                visited.add(neigh)
                dfs(neigh)

    if(n-1 != len(edges)):
        return False

    graph = defaultdict(list())

    for [a, b] in edges:
        graph[a].append(b)
        graph[b].append(a)

    visited = set()
    visited.add(0)
    dfs(0)

print(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]))
