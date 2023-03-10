Const input[21,10,35,9,19,5,60];
minmum=[0];
maxmum=[0];
output ["number  of time min record broken"];
output ["number  of time max record broken"];
let max=input[0];
let min=input[0];
input.forEach(element,index, array=> {
    
    if(element>max){
    max=element;
    result [1]=result[1]+1;
    }
    
    else if (element<min){
    min=element;
    result[0]=result[0]+1;
    }
    }
);
returnresult;
