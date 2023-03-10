let score = [13, 4, 21, 36, 3, 28, 35, 2, 24, 42,1];

let min = score[0];
let max = score[0];

const result= [0,0];

score.forEach(element => {
  if (element > max) {
    max = element;
   result[0]=result[0]+1;
  }
  if (element < min) {
    min = element;
    result[1]=result[1]+1;
  }
 
});
console.log(score);
console.log('The Maximum record break times is ='+ result[0] );
console.log('The minimum record break time is ='+ result[1]);
//output:The Maximum record break times is =3
//       The minimum record break time is =4