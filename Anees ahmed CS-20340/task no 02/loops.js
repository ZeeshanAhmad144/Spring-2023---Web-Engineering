//forEach loop example in javascript
let numbers =[ 1,2,3,4,5,6,7,8,9];

numbers.forEach(function(number)
{
    console.log(number);
});



//map loop example in javascript

let numbers2 =[2,4,6,8,10];
let mappedNumbers2 = numbers2.map(function(number)
{
    return number * 2;
});
console.log(mappedNumbers2);




//filter loop example in javascript

let numbers3 = [1,2,3,4,5,6,7,8];
let evenNumbers3 = numbers3.filter(function(number){
    return number % 2===0;
});
console.log(evenNumbers3);
