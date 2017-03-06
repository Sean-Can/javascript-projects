/**
 * Created by sean on 06/03/17.
 */
// examples from Chapter 5 hash tables

var phoneBook = {};
phoneBook['jenny'] = 4165224242;
phoneBook['sean'] = 4165227742;

console.log (phoneBook['jenny']);

var voted = {};

function checkVoter(name){
    if(voted[name]){
        console.log('Kick them out');
    }
    else{
        voted[name] = true;
        console.log('Let them Vote');
    }

}

checkVoter('Sean');
checkVoter('Sean');
checkVoter('Tom');