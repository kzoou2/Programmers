function solution(n) {
    const cal= Math.sqrt(n);
    
    if ( cal % 1 === 0 ){
        return (cal + 1) ** 2
    } else {
        return -1
    }
}