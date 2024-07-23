'use strict';
const arrayExample = [ 1, 2, 3, 3, 2, 2, -2, 2.3];

function removeElement(array, item){
for (let i = array.length - 1; i >= 0; i--){
    if ( !array.includes(item) ){
        break;
    } else {
        if (array[i] === item ){
            const index = array.indexOf(item);
            array.splice(index,1);
        }
    }
}
return  array;
}

const result = removeElement(arrayExample, 2);
console.log(result);

// function removeElement(array, item){
//    const array2 = array
//    array = []
//    console.log(array)
//    console.log(array2)
//     for (const num of array2){
//         if  ( num !== item ){
//             array.push(num)
//         }
//     }
//     return array
//     }
    
//     const result = removeElement(arrayExample, 4)
//     console.log(result)