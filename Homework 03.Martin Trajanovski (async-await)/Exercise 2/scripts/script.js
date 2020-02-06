// let arr = ["mArTiN", "BisERa", "Marko", "JoVana", "maja"]
// const isAllStrings = (currentelement) => typeof currentelement === "string";

// function changeAllToCaps(arrayOfStrings) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (arrayOfStrings.every(isAllStrings)) {
//                 let array2 = arrayOfStrings.map(word => word.toUpperCase())
//                 resolve(array2);
//             } else {
//                 reject("All items in the array must be strings.");
//             }
//         }, 2000)
//     })
// }
// function sortFunc(arr) {
//     setTimeout(() => {
//         if (arr.length >= 2) {
//             for (let i = 0; i < arr.length; i++) {
//                 for (let j = i + 1; j < arr.length; j++) {
//                     if (arr[i] > arr[j]) {
//                         let temp = arr[i];
//                         arr[i] = arr[j];
//                         arr[j] = temp;
//                     }
//                 }
//             }
//             console.log(arr);
//         } else {
//             console.log("There are not enough words in the array");
//         }
//     }, 2000)
// }
// changeAllToCaps(arr).then(data => {
//     sortFunc(data);
// }).catch(error => console.log(error))
//     .finally(() => console.log(`The operations were finished in ${Math.round(performance.now())} ms.`));

// //BONUS ASYNC/AWAIT
let arr = ["mArTiN", "BisERa", "Marko", "JoVana", "maja"]
const isAllStrings = (currentelement) => typeof currentelement === "string";

function changeAllToCaps(arrayOfStrings) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arrayOfStrings.every(isAllStrings)) {
                let array2 = arrayOfStrings.map(word => word.toUpperCase())
                resolve(array2);
            } else {
                reject("All items in the array must be strings.");
            }
        }, 2000)
    })
}
function sortFunc(arr) {
    setTimeout(() => {
        if (arr.length >= 2) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[i] > arr[j]) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            console.log(arr);
        } else {
            console.log("There are not enough words in the array");
        }
    }, 2000)
}
(async function callFUnctions () {
    try {
       let array = await changeAllToCaps(arr);
       sortFunc(array)
       console.log(`The operations were finished in ${Math.round(performance.now())} ms.`);
    } catch (error) {
        console.log(error)
    }
})()