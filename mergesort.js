// pseudocode
//     sort the left half list
//     sort the right half list
//     merge two list

function mergesort(array) {
    // base line
    // return mergedArray;

    //recursive line
    //split 
    let n = array.length;
    if(n <= 1) {
        return array;
    }
    
    let left = array.slice(0, Math.floor(n / 2));
    let right = array.slice(Math.floor(n / 2));

    let sortedLeft = mergesort(left);
    let sortedRight = mergesort(right);
    // merge
    let merged = [];
    while (sortedLeft.length && sortedRight.length) {
        if(sortedLeft[0] < sortedRight[0]) {
            merged.push(sortedLeft.shift());
        } else {
            merged.push(sortedRight.shift());
        }
    }

    return merged.concat(sortedLeft, sortedRight);
}

console.log(mergesort([]));
console.log(mergesort([73]));
console.log(mergesort([1,2,3,4,5]));
console.log(mergesort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergesort([105, 79, 100, 110]));