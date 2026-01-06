function solution(x) {
    const str = String(x);
    const arr = str.split('');
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
    }
    
    return x % sum === 0;
    
}