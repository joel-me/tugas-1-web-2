    function countingValleys(steps : number, path: string):number{
        let level = 0 ;
        let valleys = 0;
        let inValley = false;

        for (let i = 0 ; i < steps;i++){
            if (path[i]==="u") {
                level++;   
            }else if(path[i]==="d"){
                level--;
            }
            if (level < 0 && !inValley) {
                inValley = true;
                valleys++;
              } else if (level >= 0) {
                inValley = false;
              }
        }
        return valleys;
    }
    console.log(countingValleys(8,"uddduddu"));
    