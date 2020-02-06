
function testNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number <= 10) {
                reject("The number must be greater than ten.");
            } else {
                resolve(`The number ${number} is valid!`);
            }
        }, 2000)
    })
}
testNumber(13).then(data => {
        console.log(data);
    }).catch(error => console.log(error))


// BONUS WITH ASYNC/AWAIT

// function testNumber(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (number <= 10) {
//                 reject(`The number must be greater than ten.`);
//             } else {
//                 resolve(`The number ${number} is valid!`);
//             }
//         }, 2000)
//     })
// }
// (async function runTestNumber() {
//     try {
//          console.log(await testNumber(12));
//       }
//       catch(error) { 
//         console.log(error);
//       }
    
// })()