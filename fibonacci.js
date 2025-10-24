function fibs(num) {
    let arr = [];

    for(let i=0; i < num; i++) {
        if(i === 0) {
            arr.push(0);
        } else if(i === 1) {
            arr.push(1)
        } else if(i > 1) {
            let value = arr[i-2] + arr[i-1];
            arr.push(value)
        }
    }

    console.log(arr);
}

fibs(8);

function fibsRec(n, arr = [0, 1]) {
    console.log("This was printed recursively");

    if(arr.length >= n) {
        arr.slice(0, n);
    }

    const next = arr[arr.length-1] + arr[arr.length-2];
    return fibsRec(n, [...arr, next])
}

fibsRec(8, arr = [0, 1])