// break : to come out of the loop
// continue

// for(let i = 0 ; i <= 10 ; i++) {
//     console.log(i)
//     if(i == 5) {
//         break // if i is 5 then come out of the loop
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(i, j)
//         if(j == 5) {
//             break
//         }
//     }
//     if (i == 5) {
//         break
//     }
// }


for(let i = 0 ; i <= 10 ; i++) {
    if(i == 5) {
        continue; // if i is 5 then skip the rest of the code and go to the next iteration
    }
    console.log(i)
}