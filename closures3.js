function outerFunc(outerData){
    
    return function innerFun1(inner1Data){
        
        return function innerFunc2(inner2Data){
             
            return function innerFunc3(inner3Data){
                console.log(outerData);
                console.log(inner1Data);
                console.log(inner2Data);
                console.log(inner3Data);
                console.log("I am inner func3");
            }
        }
    }
}
outerFunc(0)(1)(2)(3)





