/**
 * Created by sean on 14/03/17.
 */
// Dijkstra's Algorithms



//Implement the graph.
const  graph = {};
graph['start'] ={};
graph['start']['a'] =  6;
graph['start']['b'] =  2;

graph['a'] = {};
graph['a']['fin'] = 1;

graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;

graph['fin'] = {};

// the costs table
const costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

//parents table
const parents = {};
parents['a'] =  'start';
parents['b'] = 'start';
parents['fin'] = null;
const processed = [];

function findLowestCostNode(costs){
    var lowestCost = Infinity;
    var lowestCostNode = null;
    // For each node in costs
    for(var node in costs){
        var cost = costs[node];
        // if its the lowest cost so far and has not been processed
        if (cost < lowestCost && (processed.indexOf(node) === -1)) {
            // ... set it as the new lowest-cost node.
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

var node = findLowestCostNode(costs);
// run till all nodes have been processed.
while(node !== null){
    var cost = costs[node];
    var neighbors = graph[node];
    for(var n in neighbors){
        var newCost = cost + neighbors[n];
        if(costs[n] > newCost){
            costs[n] =  newCost;
            parents[n] =  node;
        }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
}
console.log('The cheapest way is');
console.log(costs);