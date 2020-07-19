console.log('this is Q5..');

let sales=prompt("enter the sales");

let comission,earncomm;

if (sales>0 && sales<5000) 
{
    comission=2;
    earncomm = (sales*comission/100);
  //  console.log('earnd commision is',earncomm);
    
} 
else if(sales>5001 && sales<10000) 
{
    comission=5;
    earncomm = (sales*comission/100);
    
}
else if(sales>10001 && sales<20000) 
{
    comission=7;
    earncomm = (sales*comission/100);
} 
else if(sales<20000) 
{
    comission=10;
    earncomm = (sales*comission/100);
} 
else {
    console.log('invalid entry');
    
}
console.log('total commision earnd is : ',earncomm);
document.write('total commision earnd is : ',earncomm);