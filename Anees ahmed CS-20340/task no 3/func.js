    function ratioarr(vari){
    
    let positiveCount= 0;
    let negativeCount= 0;
    let zeroCount=0;

    for ( i=0; i< vari.length; i ++){
        if (vari[i]==0)
        zeroCount++;
    
    else if (vari[i]<0)
    negativeCount++;

else (vari[i]>0)
    positiveCount++;
    }

return{
    zeroCount: (zeroCount/vari.length).toFixed(6),
    negativeCount: (negativeCount/vari.length).toFixed(6),
    positiveCount: (positiveCount/vari.length).toFixed(6)
};


}
    let vari=[1,5,-6,0,-1,0,7,8];
    let ratio=ratioarr(vari);
    console.log(ratio);
//output will be  zerocount:'0.250000', negativecount:'0.250000', positivecount:'1.000000'
 



   
   