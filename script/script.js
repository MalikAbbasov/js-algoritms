// TASK-17 verilmis ededin bolenlerinin sayini tapan alqoritm yazin.
// function divide(text) {
//     const arr=[]
//     for (let i = 0; i <= text; i++) {
//         if (text%i===0 ) {
//             arr.push(i) 
//         }  
//     }
// return arr.length
// }
// console.log(divide(20));



// TASK-18 verilmis ededin bolenlerinin cemini ve hasilini tapan alqoritm yazin
// function divide(text) {
//     const arr=[]
//     let sum = 0
//     let multip = 1
//     const value = []
//     for (let i = 0; i <= text; i++) {
//         if (text%i===0 ) {
//             arr.push(i) 
//             sum += i;
//             multip *= i;
            
//         }  
        
//     }
//     value.push(sum);
//     value.push(multip);
    
//     return value;
// }
// console.log(divide(20));







// TASK-20 verilmis ededin sade ve ya murekkeb eded oldugun gosteren alqoritm yazin.
// function sadeMurekkeb(num) {
//     let sade = 1;
//     for (let i = 2; i < num; i++) {
//         if (num%i=== 0) {
//             return `murekkeb ededdir`;
//         }
        
//     }
//     if (sade) {
//         return`sade ededdir`
//     }

// }
// console.log(sadeMurekkeb(12));

// TASK-21 verilmis araliqda olan butun sade ededleritapan alqoritm yazin.
// function sade(...params) {
//   const arr = [];
//   check = true;
//   for (let i = 0; i < params.length; i++) {
//     check=true
//     for (let j = 2; j < params[i]; j++) {
//       if (params[i] % j === 0) {
//         check = false;
//       }
//     }
//     if (check) {
//       arr.push(params[i])

//     }
//   }
//   return arr
// }
// console.log(sade(12,13,17,5,7,15,29));