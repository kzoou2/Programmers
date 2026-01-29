function solution(price, money, count) {
    var totalPrice = 0;
    
    for( let i = 0; i <= count; i++){
        totalPrice += price * i;
    }
    
    const gap = totalPrice - money;
    
    return gap > 0 ? gap : 0;
}