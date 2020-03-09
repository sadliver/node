// const fs = require('fs');

// fs.writeFileSync('CodeCaMp.txt',`hello world \n`);
// fs.appendFileSync('CodeCaMp.txt',`hello guide`);

// let content = fs.readFileSync('CodeCaMp.txt',{
//     encoding: 'utf-8'
// });
// console.log(content);


  
//   function add(a, b, callbackFunction) {
//     callbackFunction(a * b);
//   }


// function min(a, b, callbackFunction){
//     if(a<b){
//         callbackFunction(a)
//     }else{
//         callbackFunction(b)
//     }
// }
  
//   min(5, 2, (result) => {
//       console.log(result)
//   });
  


// setTimeout(() => {
//     console.log("a")
//     setTimeout(() => {
//         console.log("b")
//         setTimeout(() => {
//             console.log("c")
//             setTimeout(() => {
//                 console.log("d")
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// function setTimeoutAndLog(input){
//  return new Promise(function(fullfil, reject){
//      setTimeout(() => {
//          fullfil(`${input}`)
//      }, 1000);
//  })   
// }
// setTimeoutAndLog(`a`).then(function(result){
//     console.log(result)
//     return setTimeoutAndLog(`b`)
// }).then(function(result){
//     console.log(result)
//     return setTimeoutAndLog(`c`)
// }).then(function(result){
//     console.log(result)
//     return setTimeoutAndLog(`d`)
// }).then(function(result){
//     console.log(result)
// })


function setTimeoutAndLog(input){
 return new Promise(function(fullfil, reject){
     setTimeout(() => {
         console.log(input)
         fullfil()
     }, 1000);
 })   
}

async function gg(){

    
    await setTimeoutAndLog('a');
    await setTimeoutAndLog('b');
    await setTimeoutAndLog('c');
    await setTimeoutAndLog('d');
}

gg();