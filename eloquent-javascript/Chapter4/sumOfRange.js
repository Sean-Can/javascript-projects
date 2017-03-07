/**
 * Created by sean on 07/03/17.
 */

// range function takes in a start and an end and creates an array of all numbers between the 2 values

function range(start, end){
    var array = [];
    for(var i = 1; i <= end; i++)
    {
        array[i-1] = start++

    }
    return array;
}

//sum function takes an array of numbers and adds them all together.

function sum(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

console.log(range(1, 10));

console.log(sum(range(1,10)));