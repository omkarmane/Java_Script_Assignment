console.log('this is Q 2');


// destructure


let person={
    name:"omkar",
    age:23, 
    projects:{
        dicegame:"two player dice game using js",
                 }
}
const {name , age,projects:{dicegame}} = person;
 console.log(name,age,dicegame);
 