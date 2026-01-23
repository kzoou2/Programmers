function solution(arr) {
    if (arr.length <= 1) return [-1];
    
    const minVal = Math.min(...arr);
    const minIndex = arr.indexOf(minVal);
    arr.splice(minIndex, 1);
    
    return arr;
}