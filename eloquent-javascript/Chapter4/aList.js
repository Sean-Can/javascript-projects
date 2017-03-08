/**
 * Created by sean on 08/03/17.
 */
// write a function that takes an array puts it into a list
function arrayToList(array){
    var list = null;
    var length = array.length - 1;
    for(var i = length; i >=0; i--){
        list = {value: array[i], rest: list};
    }
    return list;
}

// write a function which takes a list and puts the values into an array

function listToArray(list){
    var array = [];
    for (var node = list; node; node = node.rest)
        array.push(node.value);
    return array;

}

function prepend(element, list){
    return {value: element, rest: list}
}

function nth(list, n){
    if(!list){
        return undefined;
    }else if(n == 0){
        return list.value;
    }else{
        return nth(list.rest, n-1);
    }
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20