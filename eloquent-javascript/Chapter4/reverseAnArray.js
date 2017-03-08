/**
 * Created by sean on 08/03/17.
 */
/*create a function that takes an array and creates a new one
that has the same values in inverse order.*/

function reverseArray(array){
    var newArray = [];
    var length = array.length - 1;
  for(var i = 0; i <= length; i++){
      newArray[i] =  array[length - i];
  }

  return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

/* create a function that takes an array and reverses the order of its values.
* */

function reverseArrayInPlace(array){
    var length = array.length - 1;
    var copy = array.splice(0);
    for(var i = 0; i <= length; i++){
        array[i] = copy[length - i];
    }


}



var arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);
console.log(arrayValue);