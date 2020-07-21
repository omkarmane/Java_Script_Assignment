console.log('this  is day5')

//map
// let arr =[1,2,3,4,5,8];

// arr.forEach((ele)=>{
//     console.log(ele**3);
// })

// let  i =prompt("enter numbers seperate them by space ");

// let  num = i.split(" ");
let  arr =[1,2,3,4,5,6];

arr.forEach((ele)=>{
    
    console.log(ele);
})

let odd = arr.filter(ele=>ele%2!=0);
let cube = arr.filter(ele=>ele%2==0).map(ele=>ele**3);
console.log(odd);
console.log(cube );