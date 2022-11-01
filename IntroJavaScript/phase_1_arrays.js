 Array.prototype.uniq = function () {
    const uniqArray= [];

    this.forEach(el => {
        if (!uniqArray.includes(el)) {
            uniqArray.push(el);
        }
    });
    return uniqArray;
};

// console.log([1,2,2,3,3,3].uniq());

Array.prototype.twoSum = function () {
    const twoSumArray = [];

    for(let i = 0; i < this.length; i++){
        for (let k = i+1; k < this.length; k++){
            if (this[i] + this[k] === 0) {
                twoSumArray.push([i,k]);
            }
        }
    }
    return twoSumArray;
};   

// console.log([1, -2, 2, -3, 3].twoSum());

Array.prototype.transpose = function () {
    const transposed = [];

    for (let i = 0; i < this.length; i++) {
        let temp = [];
        for (let k = 0; k < this[0].length; k++) {
            temp.push([this[k][i]]);
        }
        transposed.push(temp);
    }
    return transposed;
};

console.log([[1,2,3],[4,5,6],[7,8,9]].transpose());