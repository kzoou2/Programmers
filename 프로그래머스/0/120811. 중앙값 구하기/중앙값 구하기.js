function solution(array) {
    array.sort ((a,b) => a - b);
    
    const centerIndex = Math.floor(array.length / 2);
    
    return array[centerIndex];
}