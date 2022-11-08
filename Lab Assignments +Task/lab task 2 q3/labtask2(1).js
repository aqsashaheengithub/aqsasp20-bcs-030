function sandwitch_calculator(bread,chese){
    var sandwitches=0;
    while(true){
        if(bread>=2){
            bread-=2;
            if(chese >= 1){
                chese-=1
                sandwitches+=1;
            }
            else{
                console.log(sandwitches+"sandwitches can be made!");
                break;
            }
        }
        else{
            console.log(sandwitches+"sandwitches can be made!");
                break;
        }
    }
}
sandwitch_calculator(26,12);


