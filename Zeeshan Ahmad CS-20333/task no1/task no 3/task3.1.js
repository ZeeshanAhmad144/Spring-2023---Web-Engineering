const num =[5,7,19,2,9,20,1,15];
num.sort(function(a,b){return a - b});
console.log(num);

    let sum =0;
    for(let i = 0; i < num.length; i++){
        sum +=num[i];
    }
    function findMinMax(num){
    let min= sum - Math.max(...num);
    let max = sum - Math.min(...num);
    return[max,min];
}

let [max,min]= findMinMax(num);
console.log("Minimum possible value is=" +min);
console.log("Maximum possible value is=" +max);


