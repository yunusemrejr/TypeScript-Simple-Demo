var Str: String;
var Int: Number;
var Bool: Boolean;
var Array1: Array<number> = [111,222,333,444,555];

Str ='TypeScript Demo By Yunus Emre Vurgun';
Int = 3;

function demoFunc(){

console.log(Str);
console.log(Int, 'is a number that has been defined as Number.');
console.log('this is an example of type Boolean below:');
console.log('this is the result of "is 1 bigger than 2?" :');


//is 1 bigger than 2?

if(1>2) {
    Bool = true;
    } 
    
    else {
        Bool = false;
    }
console.log(Bool);
}




demoFunc();