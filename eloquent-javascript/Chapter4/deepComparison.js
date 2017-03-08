/**
 * Created by sean on 08/03/17.
 */

function deepEqual(a, b){
    if(a === b){
        return true;
    }
    if(a == null || typeof a != "object" || b == null || typeof b != "object"){
        return false;
    }
     var propsA = 0,
         propsB = 0;

    for(var prop in a){
        propsA += 1;
    }
    for(var prop in b){
        propsB += 1;
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false;
    }
}






var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
