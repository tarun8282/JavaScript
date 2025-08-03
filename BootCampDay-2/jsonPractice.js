// const myObject={
//     "name":"Alice",
//     "age":25,
//     "isStudent":true,
//     "hobbies":["reading","coding"],
//     "address":{
//         "city":"New York",
//         "Zipcode":"10001"
//     }
// }
// console.log(`Name:${myObject.name}`);
// console.log(`Age:${myObject.age}`);
// console.log(`Is a Student?:${myObject.isStudent}`);
// console.log(`hobbies: ${myObject.hobbies[0]},${myObject.hobbies[1]}`);
// console.log(`address: City: ${myObject.address.city} ZipCode: ${myObject.address.Zipcode}`);


// //create an array from 1-100;
// let arr=[];
// for(let i=1;i<=100;i++)
// {
//     arr.push(i);
// }
// //Then triple each value
// for(let i=0;i<arr.length;i++)
// {
    
//     arr[i]*=3;
// }
// //Kepp only those which are divisible by 5
// let newarr=[];
// for(let i=0;i<arr.length;i++)
// {
    
//     if(arr[i]%5==0) newarr.push(arr[i]); 
// }
// //sum of all in new arrr
// let sum=0;
// for(let i=0;i<newarr.length;i++)
// {
    
//     sum+=newarr[i]
// }
// console.log(sum);

const users=[
    {name:'Alice',age:25},
    {name:'Bob',age:30},
    {name:'Charlie',age:25},

];

let Avg;
let Age=[];
for(i=0;i<users.length;i++)
{
    Age.push(users[i].age);
}

Avg=(Age.reduce((a,x)=>a+x)/users.length);

console.log(Avg);

