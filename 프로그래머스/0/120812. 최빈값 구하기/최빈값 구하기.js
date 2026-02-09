function solution(array) {
    let counts = {};
    
    for ( const num of array){
        counts[num] = (counts[num] || 0)+1;
    }
    
    let maxCount = 0;
    let mode = -1;
    let isRepeat = false;
    
    for(const num in counts){
        const count = counts[num];
        
        if ( count > maxCount){
            maxCount = count;
            mode =Number(num);
            isRepeat = false;
        } else if( count === maxCount){
            isRepeat = true;
        }
    }
    
    return isRepeat ? -1 : mode;
}