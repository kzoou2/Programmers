function solution(my_string, queries) {
    let arr = my_string.split('');
    
    for( let i = 0; i < queries.length; i++){
        const [s, e] = queries[i];
        
        const reversedPart = arr.slice(s, e + 1).reverse();
        
        arr.splice(s, reversedPart.length, ...reversedPart);
    }
    
    return arr.join('');
}