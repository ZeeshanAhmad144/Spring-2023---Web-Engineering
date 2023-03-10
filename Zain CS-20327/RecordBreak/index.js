

const records = [13, 4, 21, 36, 3, 28, 35, 2, 24, 42,1];

let min = records[0];
let max = records[0];

const result= [0,0];

records.forEach(record => {
  if (record < min) {
    min = record;
    result[1]=result[1]+1;
  }
  if (record > max) {
    max = record;
   result[0]=result[0]+1;
  }
});

console.log(result);
 console.log(`MaxRecordBreack: ${result[0]}, MinRecordBreack: ${result[1]}`);

