function solution(num) {
    const numbers ={
        EVEN : 'Even',
        ODD : 'Odd'
    };
    
    if(isEven(num)) return numbers.EVEN
        return numbers.ODD
}

function isEven(num){
    if(num === 0 || num % 2 ===0) return true;
    
    return false;
}
