let swap=(vetor, indexA, indexB) =>{ 
    //troca
    var temp = vetor[indexA];
    vetor[indexA] = vetor[indexB];
    vetor[indexB] = temp;};


   let shuffle=(vetor,qtdTrocas) =>{
        for (var i = qtdTrocas; i > 0; i--) {
 
            // Generate random number
            var j = Math.floor(Math.random() * (vetor.length ));
            var y = Math.floor(Math.random() * (vetor.length ));
            //troca
            [vetor[y],vetor[j]]= [vetor[j],vetor[y]]
        }
    }


    let bubble_sort=(vetor)=> {
        let swap; 
        let last= vetor.length -1;  
        do{
            swap=false;
            for(var i=0; i< last; i++){
                if(vetor[i]>vetor[i+1]){
                    [vetor[i],vetor[i+1]]= [vetor[i+1],vetor[i]];
                    swap=true;
                }
            }
            last--;
        } while(swap)
    };


    let selection_sort=(vetor)=>{
        let menor;
        for(let i=0; i<vetor.length-1;i++){
            menor=i;
            for(let j= i+1;j<vetor.length;j++){
                if(vetor[j]<vetor[menor]){
                    menor=j;
                }
            }
        if(i!=menor){
            [vetor[i],vetor[menor]]= [vetor[menor],vetor[i]]
        }
        }
        return vetor;
    }

    let quick_sort=(vetor,pivotIndex)=> { 
        pivotIndex=pivotIndex||0
        if (vetor.length <= 1) return vetor;
      
        const pivot = vetor[pivotIndex]
        
        
        const head = vetor.filter( n => n < pivot)
        const equal = vetor.filter( n => n === pivot)
        const tail = vetor.filter( n => n > pivot)
      
        return quick_sort(head).concat(equal).concat(quick_sort(tail));
      }
      

      let particionamento=(vetor,  inicio, final,pivotIndex)=> {
        //particiona o vetor
         let vetor2 = vetor.slice(inicio,final+1)

        return quick_sort(vetor2,pivotIndex)
     }
