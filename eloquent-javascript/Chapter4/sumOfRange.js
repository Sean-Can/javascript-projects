/**
 * Created by sean on 07/03/17.
 */

// range function takes in a start and an end and creates an array of all numbers between the 2 values

function range(start, end, step){
    var array = [];
    // if no step is given set value to 1 if start is < end else set to -1
    if(step == null){
        if(start < end){step = 1}
        else{step = -1}
    }

    if(step > 0){
        for(var i = start; i <= end; i += step)
        {
            array.push(i);
        }
    }else{
        for(var j = start; j >= end; j+= step){
            array.push(j);
        }
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

console.log(range(5, 1));
console.log(range(1,5));
console.log(range(1,10));

console.log(sum(range(1,10)));