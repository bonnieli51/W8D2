function unique (array) {
    const uniqArray= [];

    array.forEach(el => {
        if (!uniqArray.includes(el)) {
            uniqArray.push(el);
        }
    });
    return uniqArray;
}

// console.log(unique([1,2,2,3,3,3]));

function twoSum (array) {
    const twoSumArray = [];

    for(let i = 0, i < array.length; i++){
        for (let k = 0, k < array.length; k++){
            if (array[i] + array[k] === 0) {
                twoSumArray.push(i);
                twoSumArray.push(k);
            }
        }
    }
    return twoSumArray;
}   

console.log(twoSum([1,-2,2,-3,3]));