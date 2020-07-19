console.log("hey this is day 4");

//q1
//arr =[100]

for (let i = 0; i <= 100; i++) {
   if (i%3==0 && i%5==0) {
       console.log(i,"fizzbuzz");
       //continue;
    }

    else if(i%3==0){
        console.log(i,"fizz");
    }
    else if (i%5==0 ) {
         console.log(i,'buzz');            
        }
          
     else{
         console.log(i);
     }  
    
}