const recoverSecret = (triplets) => {
    const graphAndIndegree = (triplets) => {
        const graph = {};
        const indegree = {};

        triplets.forEach(([a, b, c]) => {
            if (!graph[a]) graph[a] = new Set();
            if (!graph[b]) graph[b] = new Set();
            if (!graph[c]) graph[c] = new Set();
            if (!(a in indegree)) indegree[a] = 0;
            if (!(b in indegree)) indegree[b] = 0;
            if (!(c in indegree)) indegree[c] = 0;

            if (!graph[a].has(b)) {
                graph[a].add(b);
                indegree[b]++;
            }
            if (!graph[b].has(c)) {
                graph[b].add(c);
                indegree[c]++;
            }
        });

        return { graph, indegree };
    };

    const topologicalSort = (graph, indegree) => {
        const result = [];
        const queue = [];

        for (const [node, deg] of Object.entries(indegree)) {
            if (deg === 0) queue.push(node);
        }

        while (queue.length) {
            const node = queue.shift();
            result.push(node);

            (graph[node] || []).forEach((neighbor) => {
                indegree[neighbor]--;
                if (indegree[neighbor] === 0) queue.push(neighbor);
            });
        }

        return result;
    };

    const { graph, indegree } = graphAndIndegree(triplets);
    return topologicalSort(graph, indegree).join("");
};

const findSecretString = (triplets) => {
    for (const [first] of triplets) {
        if (
            triplets.every(
                ([a]) => a === first || !triplets.some(([b]) => b === first)
            )
        ) {
            const newTriplets = triplets
                .map(([x, ...rest]) => [x === first ? rest : [x, ...rest]])
                .filter(([x]) => x.length > 0);
            return first + recoverSecret(newTriplets);
        }
    }

    return "";
};

const findSecretOrder = (triplets) => {
    const graph = {};
    const indegree = {};

    triplets.forEach(([a, b, c]) => {
        [a, b, c].forEach((node) => {
            if (!graph[node]) graph[node] = new Set();
            if (!(node in indegree)) indegree[node] = 0;
        });
        if (!graph[a].has(b)) {
            graph[a].add(b);
            indegree[b]++;
        }
        if (!graph[b].has(c)) {
            graph[b].add(c);
            indegree[c]++;
        }
    });

    const result = [];
    const queue = Object.keys(indegree).filter((node) => indegree[node] === 0);

    while (queue.length) {
        const node = queue.shift();
        result.push(node);
        (graph[node] || []).forEach((neighbor) => {
            if (--indegree[neighbor] === 0) queue.push(neighbor);
        });
    }

    return result.join("");
};