/**
 * Created by sean on 06/03/17.
 */
// found in chapter 6 of grokking algorithms

const graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] =  ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['mom', 'johnny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['johnny'] = [];

function personIsSeller(name){
    return name[name.length - 1] === 'm';
}

function search(name) {
    var searchQueue = [];
    searchQueue = searchQueue.concat(graph[name]);
    const searched = [];
    while (searchQueue.length) {
        var person = searchQueue.shift();
        // Only search this person if you haven't already searched them
        if (searched.indexOf(person) === -1) {
            if (personIsSeller(person)) {
                console.log(person + ' is a mango seller!');
                return true;
            } else {
                searchQueue = searchQueue.concat(graph[person]);
                // Marks this person as searched
                searched.push(person);
            }
        }
    }
    return false;
}


search('you'); // thom is a mango seller!