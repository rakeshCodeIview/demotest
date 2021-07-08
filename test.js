let string = 'exlua';
let output = ''
let prev_row = 0
let prev_col = 0
for (let i = 0; i < string.length; i++) {
    let asci = string[i].charCodeAt(0) - 97
    // console.log(asci)
    let curr_row = Math.floor(asci / 5);
    let curr_col = asci % 5;
    let diffCol = curr_col - prev_col
    let diffRow = curr_row - prev_row;
    if (diffCol < 0) {
        for (let j = 0; j < Math.abs(diffCol); j++)
            output += 'L';

    }
    else {
        for (let j = 0; j < Math.abs(diffCol); j++)
            output += 'R';
    }
    if (diffRow < 0) {
        for (let j = 0; j < Math.abs(diffRow); j++)
            output += 'U';
    }
    else {
        for (let j = 0; j < Math.abs(diffRow); j++)
            output += 'D';
    }
    prev_row=curr_row;
    prev_col=curr_col;
    output+='!'

}

console.log(output)