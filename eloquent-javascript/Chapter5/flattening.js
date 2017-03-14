/**
 * Created by sean on 14/03/17.
 */
/* Use the reduce method in combination with the
concat method to "flatten" an array.
 */

const arrays = [[1, 2, 3], [4, 5], [6]];

// for each item in array remove it and paste in new array flat
console.log(arrays.reduce(function(flat, current){
    return flat.concat(current);
},[]));




